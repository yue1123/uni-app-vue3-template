/**
 * 签到的状态
 * INITIAL - 初始状态, APPROVED - 批准状态, REJECTED - 拒绝转态, EXITED - 退出转态;
 */
export type SignStatus = 'INITIAL' | 'APPROVED' | 'REJECTED' | 'EXITED'

// 签到列表数据
export interface signListData {
	/**
	 * 申请时间
	 */
	addTime: number
	/**
	 * 审批时间
	 */
	approveTime: number
	/**
	 * 审批人id
	 */
	approveUserId: string
	/**
	 * 审批人名字
	 */
	approveUsername: string
	/**
	 * 设备柜员号
	 */
	deviceTeller: string
	/**
	 * 用户姓名
	 */
	displayName: string
	/**
	 * id
	 */
	id: string
	/**
	 * 签到状态
	 * INITIAL - 初始状态
	 * APPROVED - 批准状态
	 * REJECTED - 拒绝转态
	 * EXITED - 退出转态
	 */
	status: SignStatus
	/**
	 * 用户绑定柜员号
	 */
	userTeller: string
	/**
	 * 用户名
	 */
	username: string
}

/**
 * 签到的状态
 * ACTIVATION - 激活, NOT_NETWORK - 未入网, WAIT_ACTIVATION - 待激活;
 */
export type DeviceStatus = 'ACTIVATION' | 'NOT_NETWORK' | 'WAIT_ACTIVATION'

export interface DeviceData {
	/**
	 * 设备编码
	 */
	code: string
	/**
	 * 设备id
	 */
	id: string
	/**
	 * 唯一标识IMEI
	 */
	imei: string
	/**
	 * 法人机构号
	 */
	legalCode: string
	/**
	 * 设备制造厂商
	 */
	manufacturer: string
	/**
	 * 设备型号
	 */
	model: string
	/**
	 * 设备名称
	 */
	name: string
	/**
	 * 操作系统
	 */
	os: string
	/**
	 * 操作系统版本号
	 */
	osVersion: string
	/**
	 * 设备状态
	 */
	state: DeviceStatus
	/**
	 * 尾箱号
	 */
	tailBoxNo: string
	/**
	 * 虚拟柜员号
	 */
	tellerNo: string
	/**
	 * 虚拟柜员机构名称
	 */
	tellerOrgName: string
	/**
	 * 柜员机构号
	 */
	tellerOrgNo: string
	/**
	 * 实体柜员号
	 */
	userTellerNo: string
	/**
	 * 实体柜员组织机构Name
	 */
	userTellerOrgName: string
	/**
	 * 实体柜员组织机构code
	 */
	userTellerOrgNo: string
}

/**
 * 设备位置信息
 */
export interface DeviceLocationData {
	/**
	 * 维度
	 */
	latitude: string
	/**
	 * 获取坐标位置时的时间
	 */
	locationTime: number
	/**
	 * 经度
	 */
	longitude: string
	/**
	 * 地址
	 */
	place: string
}

/**
 * 凭证的状态
 */
export enum CredentialStatus {
	/**
	 * 未反馈
	 */
	UNTREATED = '未反馈',
	/**
	 * 已反馈
	 */
	HAVEFEEDBACK = '已反馈',
	/**
	 * 重查
	 */
	REPETITION = '重查',
	/**
	 * 完成
	 */
	COMPLETE = '完成'
}

/**
 * 凭证任务数据
 */
export interface CredentialTaskData {
	id: string
	/**
	 * 发起时间
	 */
	createTime: number
	/**
	 * 设备编码
	 */
	deviceCode: string
	/**
	 * 反馈时间
	 */
	feedbackTime: number
	/**
	 * 上传图片的id
	 */
	fileIds: string
	/**
	 * 所属网点
	 */
	orgName: string
	/**
	 * 反馈状态
	 */
	status: keyof typeof CredentialStatus
	/**
	 * 凭证尾箱号
	 */
	tailBoxNo: string
	/**
	 * 虚拟柜员号
	 */
	tellerNo: string
	/**
	 * 虚拟柜员机构code
	 */
	tellerOrgNo: string
	/**
	 * 清库时间
	 */
	updateTime: number
	/**
	 * 设备imei
	 */
	deviceImei: string
}

/**
 * 管理端尾箱设备
 */
export interface TailBoxDeviceData {
	/**
	 * 设备编码
	 */
	deviceCode: string
	/**
	 * id
	 */
	id: string
	/**
	 * 所属网点
	 */
	orgName: string
	/**
	 * 尾箱号
	 */
	tailBoxNo: string
	/**
	 * 虚拟柜员号
	 */
	tellerNo: string
	/**
	 * 虚拟柜员机构code
	 */
	tellerOrgNo: string
	/**
	 * 更新时间
	 */
	updateTime: number
	/**
	 * 设备imei
	 */
	deviceImei: string
}

/**
 * 产品数据
 */

export interface ProductData {
	/**
	 * 产品代码
	 */
	chanphao: string

	/**
	 * 产品描述
	 */
	kcapmios: string

	/**
	 * 凭证张数
	 */
	pingzzsh: number

	/**
	 * 起始开号
	 */
	qiskahao: string

	/**
	 * 终止卡号
	 */
	zzhkahao: string
}
