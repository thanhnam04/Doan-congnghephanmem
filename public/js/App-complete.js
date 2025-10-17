const { useState } = React;

const mockData = {
    buses: [
        { id: 1, name: 'Xe 01', route: 'Tuyến A', driver: 'Nguyễn Thành Nam', status: 'Đang hoạt động', location: '12.345, 106.789' },
        { id: 2, name: 'Xe 02', route: 'Tuyến B', driver: 'Trần Đức Anh', status: 'Đang hoạt động', location: '12.356, 106.801' },
        { id: 3, name: 'Xe 03', route: 'Tuyến C', driver: 'Phạm Kim Chung', status: 'Đang hoạt động', location: '12.340, 106.795' },
        { id: 4, name: 'Xe 04', route: 'Tuyến D', driver: 'Bùi Tấn Phát', status: 'Đang hoạt động', location: '12.340, 106.702' }
    ],
    students: [
        { id: 1, name: 'Nguyễn Minh An', grade: 'Lớp 1A', bus: 'Xe 01', pickup: 'Điểm A1', status: 'Đã đón', parentPhone: '0123-456-789' },
        { id: 2, name: 'Trần Quốc Bảo', grade: 'Lớp 2B', bus: 'Xe 01', pickup: 'Điểm A2', status: 'Chưa đón', parentPhone: '0987-654-321' },
        { id: 3, name: 'Lê Thị Cẩm', grade: 'Lớp 3C', bus: 'Xe 02', pickup: 'Điểm B1', status: 'Đã đón', parentPhone: '0912-345-678' },
        { id: 4, name: 'Phạm Văn D', grade: 'Lớp 1A', bus: 'Xe 01', pickup: 'Điểm A3', status: 'Chưa đón', parentPhone: '0934-567-890' }
    ],
    drivers: [
        { id: 1, name: 'Nguyễn Thành Nam', phone: '0123-456-789', bus: 'Xe 01', status: 'Đang làm việc' },
        { id: 2, name: 'Trần Đức Anh', phone: '0987-654-321', bus: 'Xe 02', status: 'Đang làm việc' },
        { id: 3, name: 'Bùi Tấn Phát', phone: '0912-345-678', bus: 'Xe 03', status: 'Nghỉ phép' }
    ],
    routes: [
        { id: 1, name: 'Tuyến A', stops: ['Điểm A1', 'Điểm A2', 'Điểm A3'], distance: '15km', duration: '45 phút' },
        { id: 2, name: 'Tuyến B', stops: ['Điểm B1', 'Điểm B2', 'Điểm B3'], distance: '12km', duration: '35 phút' },
        { id: 3, name: 'Tuyến C', stops: ['Điểm C1', 'Điểm C2', 'Điểm C3'], distance: '18km', duration: '50 phút' }
    ],
    notifications: [
        { id: 1, type: 'approaching', message: 'Xe buýt đang đến gần điểm đón của bé Nguyễn Minh An', time: '7:45 AM' },
        { id: 2, type: 'picked', message: 'Bé Lê Thị Cẩm đã được đón lên xe', time: '7:30 AM' }
    ],
    alerts: [
        { id: 1, type: 'delay', message: 'Xe 01 bị trễ 10 phút do tắc đường', time: '7:50 AM' }
    ]
};

const accounts = [
    { username: 'manager', password: '123', role: 'manager' },
    { username: 'driver', password: '123', role: 'driver' },
    { username: 'parent', password: '123', role: 'parent' }
];

const ManagerDashboard = ({ data }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [message, setMessage] = useState('');
    const [selectedRecipient, setSelectedRecipient] = useState('');

    const sendMessage = () => {
        if (message && selectedRecipient) {
            alert(`Tin nhắn đã gửi đến ${selectedRecipient}: ${message}`);
            setMessage('');
            setSelectedRecipient('');
        }
    };

    return (
        <div>
            <h3 className="panel-title">Bảng điều khiển Quản lý</h3>
            <div className="tab-buttons">
                <button onClick={() => setActiveTab('overview')} className={`btn ${activeTab === 'overview' ? 'btn-primary' : 'btn-secondary'}`}>Tổng quan</button>
                <button onClick={() => setActiveTab('lists')} className={`btn ${activeTab === 'lists' ? 'btn-primary' : 'btn-secondary'}`}>Danh sách</button>
                <button onClick={() => setActiveTab('manage')} className={`btn ${activeTab === 'manage' ? 'btn-primary' : 'btn-secondary'}`}>Quản lý</button>
                <button onClick={() => setActiveTab('messages')} className={`btn ${activeTab === 'messages' ? 'btn-primary' : 'btn-secondary'}`}>Tin nhắn</button>
            </div>

            {activeTab === 'overview' && (
                <div className="panel-content">
                    <div className="info-card">
                        <h4>Tổng quan hệ thống</h4>
                        <p>Số xe buýt: {data.buses.length}</p>
                        <p>Số học sinh: {data.students.length}</p>
                        <p>Số tài xế: {data.drivers.length}</p>
                        <p>Số tuyến đường: {data.routes.length}</p>
                    </div>
                    <div className="info-card">
                        <h4>Xe buýt đang hoạt động</h4>
                        {data.buses.filter(bus => bus.status === 'Đang hoạt động').map(bus => (
                            <div key={bus.id} className="student-item">
                                <div>
                                    <strong>{bus.name}</strong> - {bus.route} - Tài xế: {bus.driver}
                                </div>
                                <button onClick={() => alert(`Cập nhật vị trí cho xe ${bus.id}`)} className="btn btn-success">Cập nhật vị trí</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'lists' && (
                <div>
                    <div className="info-card">
                        <h4>Danh sách Học sinh</h4>
                        {data.students.map(student => (
                            <p key={student.id}>{student.name} - {student.grade} - Xe: {student.bus} - Điểm đón: {student.pickup}</p>
                        ))}
                    </div>
                    <div className="info-card">
                        <h4>Danh sách Tài xế</h4>
                        {data.drivers.map(driver => (
                            <p key={driver.id}>{driver.name} - SĐT: {driver.phone} - Xe: {driver.bus} - Trạng thái: {driver.status}</p>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'manage' && (
                <div className="panel-content">
                    <div className="info-card">
                        <h4>Tạo/Cập nhật Lịch trình</h4>
                        <button onClick={() => alert('Tạo lịch trình tuần')} className="btn btn-info" style={{marginRight: '0.5rem'}}>Tạo lịch trình tuần</button>
                        <button onClick={() => alert('Tạo lịch trình tháng')} className="btn btn-info">Tạo lịch trình tháng</button>
                    </div>
                </div>
            )}

            {activeTab === 'messages' && (
                <div className="info-card">
                    <h4>Gửi Tin nhắn</h4>
                    <select value={selectedRecipient} onChange={(e) => setSelectedRecipient(e.target.value)} className="form-control" style={{marginBottom: '0.5rem'}}>
                        <option value="">Chọn người nhận</option>
                        <option value="Tài xế">Tài xế</option>
                        <option value="Phụ huynh">Phụ huynh</option>
                    </select>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Nhập tin nhắn..." className="form-control" style={{marginBottom: '0.5rem', minHeight: '100px'}}></textarea>
                    <button onClick={sendMessage} className="btn btn-danger">Gửi tin nhắn</button>
                </div>
            )}
        </div>
    );
};

const DriverDashboard = ({ data }) => {
    const driverStudents = data.students.filter(student => student.bus === 'Xe 01');

    return (
        <div>
            <h3 className="panel-title">Bảng điều khiển Tài xế</h3>
            <div className="panel-content">
                <div className="info-card">
                    <h4>Lịch làm việc hôm nay</h4>
                    <p>Tuyến đường: Tuyến A</p>
                    <p>Xe: Xe 01</p>
                    <p>Giờ bắt đầu: 6:30 AM</p>
                    <p>Giờ kết thúc dự kiến: 8:15 AM</p>
                </div>
                <div className="info-card">
                    <h4>Danh sách học sinh cần đón</h4>
                    {driverStudents.map(student => (
                        <div key={student.id} className="student-item">
                            <div>
                                <p>{student.name} - Điểm đón: {student.pickup}</p>
                                <p>Trạng thái: {student.status}</p>
                            </div>
                            <div>
                                {student.status === 'Chưa đón' && (
                                    <button onClick={() => alert(`Đã báo cáo đón học sinh ${student.id}`)} className="btn btn-success">Báo cáo đón</button>
                                )}
                                {student.status === 'Đã đón' && (
                                    <button onClick={() => alert(`Đã báo cáo trả học sinh ${student.id}`)} className="btn btn-info">Báo cáo trả</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="info-card" style={{marginTop: '1rem'}}>
                <h4>Gửi cảnh báo sự cố</h4>
                <button onClick={() => alert('Đã gửi cảnh báo sự cố')} className="btn btn-danger">Gửi cảnh báo</button>
            </div>
        </div>
    );
};

const ParentDashboard = ({ data }) => {
    const childBus = data.buses.find(bus => bus.name === 'Xe 01');

    // Dùng useEffect để khởi tạo bản đồ sau khi DOM đã render
    React.useEffect(() => {
        if (window.google && document.getElementById("map")) {
            const sg = { lat: 10.762622, lng: 106.660172 };
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 14,
                center: sg,
                mapTypeControl: true,
                zoomControl: true,
                scaleControl: true,
                streetViewControl: true,
                fullscreenControl: true,
                rotateControl: true,
            });
            new google.maps.Marker({
                position: sg,
                map: map,
                title: "Đại học Sài Gòn",
            });

            // Thêm marker cho vị trí xe buýt
            const busLocation = { lat: 10.765, lng: 106.665 }; // Vị trí mẫu cho xe buýt
            new google.maps.Marker({
                position: busLocation,
                map: map,
                title: "Vị trí xe buýt",
                icon: {
                    url: "data:image/svg+xml;charset=UTF-8,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='20' cy='20' r='18' fill='%23000' stroke='%23fff' stroke-width='2'/%3e%3ctext x='20' y='25' text-anchor='middle' fill='%23fff' font-size='12'%3eBUS%3c/text%3e%3c/svg%3e",
                    scaledSize: new google.maps.Size(40, 40)
                }
            });

            // Vẽ đường đi mẫu
            const routePath = [
                { lat: 10.762622, lng: 106.660172 },
                { lat: 10.765, lng: 106.665 },
                { lat: 10.770, lng: 106.670 }
            ];
            const routePolyline = new google.maps.Polyline({
                path: routePath,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
            });
            routePolyline.setMap(map);
        }
    }, []); // chỉ chạy 1 lần sau khi render

    return (
        <div>
            <h3 className="panel-title">Bảng điều khiển Phụ huynh</h3>

            <div className="info-card">
                <h4>Xe của bé</h4>
                <p>Xe 01 - Tuyến A - Tài xế: Nguyễn Văn A</p>
                <p>Trạng thái: Đang di chuyển</p>
            </div>

            {/* Bản đồ thật */}
            <div className="bus-map" id="map" style={{ height: "400px" }}></div>

            <div className="info-card">
                <h4>Thông báo</h4>
                {data.notifications.map(notification => (
                    <div key={notification.id} className="notification-item">
                        <p>{notification.message} - {notification.time}</p>
                    </div>
                ))}
            </div>

            <div className="info-card">
                <h4>Cảnh báo</h4>
                {data.alerts.map(alert => (
                    <div key={alert.id} className="alert-item">
                        <p>{alert.message} - {alert.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [data] = useState(mockData);

    const handleLogin = (e) => {
        e.preventDefault();
        const user = accounts.find(acc => acc.username === username && acc.password === password);
        if (user) {
            setRole(user.role);
            setLoggedIn(true);
        } else {
            alert('Sai tên đăng nhập hoặc mật khẩu!');
        }
    };

    if (!loggedIn) {
        return (
            <div style={{
                display: 'flex',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #1e5799 0%, #207cca 100%)',
                color: 'white'
            }}>
                <div style={{
                    background: 'white',
                    color: '#333',
                    padding: '2rem 3rem',
                    borderRadius: '10px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                    width: '350px',
                    textAlign: 'center'
                }}>
                    <h2 style={{ color: '#1e5799', marginBottom: '1rem' }}>Đăng nhập SSB 1.0</h2>
                    <form onSubmit={handleLogin}>
                        <div style={{ marginBottom: '1rem' }}>
                            <input 
                                type="text" 
                                placeholder="Tên đăng nhập" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                required
                                className="form-control"
                            />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <input 
                                type="password" 
                                placeholder="Mật khẩu" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                            Đăng nhập
                        </button>
                    </form>
                    <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                        <strong>Tài khoản mẫu:</strong><br/>
                        Quản lý: manager / 123<br/>
                        Tài xế: driver / 123<br/>
                        Phụ huynh: parent / 123
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <header>
                <div className="container header-content">
                    <div className="logo">SSB 1.0</div>
                    <button 
                        onClick={() => setLoggedIn(false)} 
                        className="btn"
                        style={{
                            background: 'white', 
                            color: '#1e5799'
                        }}
                    >
                        Đăng xuất
                    </button>
                </div>
            </header>

            <section className="demo" style={{ paddingTop: '2rem' }}>
                <div className="container demo-content">
                    <div className="user-panel">
                        {role === 'manager' && <ManagerDashboard data={data} />}
                        {role === 'driver' && <DriverDashboard data={data} />}
                        {role === 'parent' && <ParentDashboard data={data} />}
                    </div>
                </div>
            </section>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
