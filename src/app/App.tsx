import ReactDOM from 'react-dom/client'
import styles from './styles/global.module.css'
import {RouterProvider} from "react-router-dom";
import {AppRouter} from "@/app/router";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <div className={styles}>
        <RouterProvider router={AppRouter}/>
    </div>
)
