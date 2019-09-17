import Home from '../pages/Home'
import BranchList from '../pages/BranchList'
import BranchDetail from '../pages/BranchDetail'
import EmployeeList from '../pages/EmployeeList'
import EmployeeContractList from '../pages/EmployeeContractList'
import CustomerDetail from '../pages/CustomerDetail'
import CustomerAdd from '../pages/CustomerAdd'
import ServiceAdd from '../pages/ServiceAdd'
import ServiceList from '../pages/ServiceList'
import SalaryHistory from '../pages/SalaryHistory'
import SalaryResult from '../pages/SalaryResult'
import EmployeeInfo from '../pages/EmployeeInfo'

export default [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/danh-sach-co-so',
        component: BranchList,
    },
    {
        path: '/thong-tin-co-so',
        component: BranchDetail,
    },
    {
        path: '/danh-sach-nhan-vien',
        component: EmployeeList,
    },
    {
        path: '/danh-sach-nhan-vien/thong-tin-nhan-vien',
        component: EmployeeInfo,
    },
    {
        path: '/danh-sach-hop-dong',
        component: EmployeeContractList,
    },
    {
        path: '/thong-tin-khach-hang',
        component: CustomerDetail,
    },
    {
        path: '/them-khach-hang',
        component: CustomerAdd,
    },
    {
        path: '/danh-sach-dich-vu',
        component: ServiceList,
    },
    {
        path: '/tao-moi-dich-vu',
        component: ServiceAdd,
    },
    {
        path: '/lich-su-thu-nhap',
        component: SalaryHistory,
    },
    {
        path: '/tong-hop-luong',
        component: SalaryResult,
    },
]
