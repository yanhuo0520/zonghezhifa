
var Context, BluetoothAdapter, BluetoothDevice;
// 蓝牙服务与适配
var BManager, BAdapter, BluetoothSocket, mDevice, receiver;
var mMain, mUUID;

var mac_name = "";
var mac_address = "";

/**
 * 测试蓝牙是否打开（Android）
 */
function testBluetoothEnable() {
	mMain = plus.android.runtimeMainActivity();
	Context = plus.android.importClass("android.content.Context");
	BManager = mMain.getSystemService(Context.BLUETOOTH_SERVICE);
	plus.android.importClass(BManager); //引入相关的method函数
	BAdapter = BManager.getAdapter();
	plus.android.importClass(BAdapter); //引入相关的method函数，这样之后才会有isEnabled函数支持
	return BAdapter.isEnabled();
}

/**
 * 扫描蓝牙设备 
 */
function searchDevices() {
	//console.log("开始搜索设备");
	if (!BAdapter.isEnabled()) {
		plus.nativeUI.toast('请先打开蓝牙');
		return;
	}
	plus.nativeUI.showWaiting('正在搜索设备，请稍后...', {
		back: 'close' // 可取值"none"表示截获处理返回键，但不做任何响应；"close"表示截获处理返回键并关闭等待框；"transmit"表示不截获返回键，向后传递给Webview窗口继续处理（与未显示等待框的情况一致）。 
	});
	vlist1.innerHTML = ''; //清空容器
	vlist2.innerHTML = ''; //清空容器
	// 初始化蓝牙广播接收器 
	initReceiver();
	// 开启搜索
	BAdapter.startDiscovery();
	// 初始化广播信息过滤
	initIntentFilter();
}

/** 
 * 获取已配对的蓝牙设备列表 
 */
function getConnectedDevices() {
	if (!BAdapter.isEnabled()) {
		plus.nativeUI.toast('请先打开蓝牙');
		return;
	}
	var lists = BAdapter.getBondedDevices(); //获取配对的设备列表
	plus.android.importClass(lists);
	var iterator = lists.iterator();
	plus.android.importClass(iterator);
	var vlist2 = document.getElementById('list2'); //注册容器用来显示未配对设备
	while (iterator.hasNext()) {
		var d = iterator.next();
		plus.android.importClass(d);
		var li2 = genLi(d);
		vlist2.appendChild(li2);
	}
}

function initReceiver() {
	BluetoothDevice = plus.android.importClass("android.bluetooth.BluetoothDevice");
	var bdevice = new BluetoothDevice();
	receiver = plus.android.implements('io.dcloud.android.content.BroadcastReceiver', {
		onReceive: function(context, intent) { //实现onReceiver回调函数
			plus.android.importClass(intent); //通过intent实例引入intent类，方便以后的‘.’操作
			// console.log(intent.getAction()); //获取action
			if (intent.getAction() == "android.bluetooth.adapter.action.DISCOVERY_FINISHED") {
				mMain.unregisterReceiver(receiver); //取消监听
				plus.nativeUI.closeWaiting();
			} else {
				BleDevice = intent.getParcelableExtra(BluetoothDevice.EXTRA_DEVICE);
				//判断是否配对
				if (BleDevice.getBondState() == bdevice.BOND_NONE) {
					// console.log("未配对蓝牙设备：" + BleDevice.getName() + '    ' + BleDevice.getAddress());
					if (!document.getElementById(BleDevice.getAddress())) { //判断防止重复添加
						var li1 = genLi(BleDevice);
						if(BleDevice.getName() != null){
							vlist1.appendChild(li1);
						}
					}
				} else {
					if (!document.getElementById(BleDevice.getAddress())) { //判断防止重复添加
						// console.log("已配对蓝牙设备：" + BleDevice.getName() + '    ' + BleDevice.getAddress());
						var li2 = genLi(BleDevice);
						vlist2.appendChild(li2);
					}
				}
			}
		}
	});
}

function initIntentFilter() { // 设置广播信息过滤  
	var IntentFilter = plus.android.importClass('android.content.IntentFilter');
	var filter = new IntentFilter();
	filter.addAction(BluetoothDevice.ACTION_FOUND);
	filter.addAction(BAdapter.ACTION_DISCOVERY_STARTED);
	filter.addAction(BAdapter.ACTION_DISCOVERY_FINISHED);
	filter.addAction(BAdapter.ACTION_STATE_CHANGED);
	// 注册广播接收器，接收并处理搜索结果  
	mMain.registerReceiver(receiver, filter);
}

function connect(mac_address) { // 查找蓝牙设备
	mac_address = mac_address ? mac_address : plus.storage.getItem("mac_address");
	var unConnected = BAdapter.getRemoteDevice(mac_address);
	if (unConnected) {
		try {
			if (BleDevice.createBond()) { //配对命令.createBond()
				mui.toast("蓝牙打印设备 配对成功");
				getConnectedDevices();
			}
		} catch (e) { //TODO handle the exception
			mui.toast('连接蓝牙打印设备失败');
		}
	}
}

function genLi(bleDevice) {
	var li = document.createElement('li');
	li.setAttribute('id', bleDevice.getAddress());
	li.className = 'mui-table-view-cell';
	var a = document.createElement('a');
	a.setAttribute('class', 'mui-navigate-right')
	a.innerText = bleDevice.getName();
	li.appendChild(a);

	return li;
}