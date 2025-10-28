// import  { useState } from 'react';
// import { mockData } from './mockData';

// const ManagerDashboard = () => {
//   const [activeTab, setActiveTab] = useState('overview');

//   return (
//     <div>
//       <h3 className="panel-title">Bảng điều khiển Quản lý</h3>

//       <div className="tab-buttons">
//         <button
//           onClick={() => setActiveTab('overview')}
//           className={`btn ${activeTab === 'overview' ? 'btn-primary' : 'btn-secondary'}`}
//         >
//           Tổng quan
//         </button>
//         <button
//           onClick={() => setActiveTab('buses')}
//           className={`btn ${activeTab === 'buses' ? 'btn-primary' : 'btn-secondary'}`}
//         >
//           Quản lý xe buýt
//         </button>
//         <button
//           onClick={() => setActiveTab('drivers')}
//           className={`btn ${activeTab === 'drivers' ? 'btn-primary' : 'btn-secondary'}`}
//         >
//           Quản lý tài xế
//         </button>
//         <button
//           onClick={() => setActiveTab('parents')}
//           className={`btn ${activeTab === 'parents' ? 'btn-primary' : 'btn-secondary'}`}
//         >
//           Phụ huynh
//         </button>
//       </div>

//       <div className="tab-content">
//         {activeTab === 'overview' && (
//           <div className="panel-content">
//             <h4>Tổng quan hệ thống</h4>
//             <p>Tổng số xe buýt: {mockData.buses.length}</p>
//             <p>Tổng số tài xế: {mockData.drivers.length}</p>
//             <p>Tổng số phụ huynh: {mockData.parents.length}</p>
//             <p>Tổng số học sinh: {mockData.students.length}</p>
//           </div>
//         )}

//         {activeTab === 'buses' && (
//           <div className="panel-content">
//             <h4>Danh sách xe buýt</h4>
//             <table className="table table-striped">
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Tên</th>
//                   <th>Tuyến</th>
//                   <th>Tài xế</th>
//                   <th>Trạng thái</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {mockData.buses.map(bus => (
//                   <tr key={bus.id}>
//                     <td>{bus.id}</td>
//                     <td>{bus.name}</td>
//                     <td>{bus.route}</td>
//                     <td>{bus.driver}</td>
//                     <td>{bus.status}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {activeTab === 'drivers' && (
//           <div className="panel-content">
//             <h4>Danh sách tài xế</h4>
//             <table className="table table-striped">
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Họ tên</th>
//                   <th>SĐT</th>
//                   <th>Xe phụ trách</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {mockData.drivers.map(driver => (
//                   <tr key={driver.id}>
//                     <td>{driver.id}</td>
//                     <td>{driver.name}</td>
//                     <td>{driver.phone}</td>
//                     <td>{driver.bus}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {activeTab === 'parents' && (
//           <div className="panel-content">
//             <h4>Danh sách phụ huynh</h4>
//             <table className="table table-striped">
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Họ tên</th>
//                   <th>SĐT</th>
//                   <th>Số con</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {mockData.parents.map(parent => (
//                   <tr key={parent.id}>
//                     <td>{parent.id}</td>
//                     <td>{parent.name}</td>
//                     <td>{parent.phone}</td>
//                     <td>{parent.children}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ManagerDashboard;
