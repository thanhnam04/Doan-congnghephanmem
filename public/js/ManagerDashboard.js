import React, { useState } from 'react';

const ManagerDashboard = ({ data }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [message, setMessage] = useState('');
    const [selectedRecipient, setSelectedRecipient] = useState('');
    const [schedule, setSchedule] = useState(null);

    const sendMessage = () => {
        if (message && selectedRecipient) {
            alert(`Tin nhắn đã gửi đến ${selectedRecipient}: ${message}`);
            setMessage('');
            setSelectedRecipient('');
        }
    };

    const generateWeeklySchedule = () => {
        const days = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
        const weeklySchedule = days.map(day => ({
            day,
            buses: data.buses.map(bus => ({
                name: bus.name,
                route: bus.route,
                driver: bus.driver
            }))
        }));
        setSchedule({ type: 'weekly', data: weeklySchedule });
    };

    const generateMonthlySchedule = () => {
        const currentMonth = new Date().toLocaleString('vi-VN', { month: 'long', year: 'numeric' });
        const monthlySchedule = data.buses.map(bus => ({
            bus: bus.name,
            route: bus.route,
            driver: bus.driver,
            days: 30 // Assuming 30 days for simplicity
        }));
        setSchedule({ type: 'monthly', month: currentMonth, data: monthlySchedule });
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
                        <table className="table table-striped">
                            <tbody>
                                <tr>
                                    <td>Số xe buýt</td>
                                    <td>{data.buses.length}</td>
                                </tr>
                                <tr>
                                    <td>Số học sinh</td>
                                    <td>{data.students.length}</td>
                                </tr>
                                <tr>
                                    <td>Số tài xế</td>
                                    <td>{data.drivers.length}</td>
                                </tr>
                                <tr>
                                    <td>Số tuyến đường</td>
                                    <td>{data.routes.length}</td>
                                </tr>
                            </tbody>
                        </table>
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
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Tên học sinh</th>
                                    <th>Lớp</th>
                                    <th>Xe buýt</th>
                                    <th>Điểm đón</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.students.map(student => (
                                    <tr key={student.id}>
                                        <td>{student.name}</td>
                                        <td>{student.grade}</td>
                                        <td>{student.bus}</td>
                                        <td>{student.pickup}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="info-card">
                        <h4>Danh sách Tài xế</h4>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Tên tài xế</th>
                                    <th>SĐT</th>
                                    <th>Xe buýt</th>
                                    <th>Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.drivers.map(driver => (
                                    <tr key={driver.id}>
                                        <td>{driver.name}</td>
                                        <td>{driver.phone}</td>
                                        <td>{driver.bus}</td>
                                        <td>{driver.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {activeTab === 'manage' && (
                <div className="panel-content">
                    <div className="info-card">
                        <h4>Tạo/Cập nhật Lịch trình</h4>
                        <button onClick={generateWeeklySchedule} className="btn btn-info" style={{marginRight: '0.5rem'}}>Tạo lịch trình tuần</button>
                        <button onClick={generateMonthlySchedule} className="btn btn-info">Tạo lịch trình tháng</button>
                    </div>
                    {schedule && (
                        <div className="info-card" style={{marginTop: '1rem'}}>
                            <h4>{schedule.type === 'weekly' ? 'Lịch trình Tuần' : `Lịch trình Tháng ${schedule.month}`}</h4>
                            {schedule.type === 'weekly' ? (
                                schedule.data.map(daySchedule => (
                                    <div key={daySchedule.day}>
                                        <h5>{daySchedule.day}</h5>
                                        {daySchedule.buses.map(bus => (
                                            <p key={bus.name}>{bus.name} - {bus.route} - Tài xế: {bus.driver}</p>
                                        ))}
                                    </div>
                                ))
                            ) : (
                                schedule.data.map(busSchedule => (
                                    <p key={busSchedule.bus}>{busSchedule.bus} - {busSchedule.route} - Tài xế: {busSchedule.driver} - {busSchedule.days} ngày</p>
                                ))
                            )}
                        </div>
                    )}
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

export default ManagerDashboard;
