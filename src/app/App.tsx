import ReactDOM from 'react-dom/client'
import {AppRouter} from "./router";
import styles from "./styles/global.module.css"
import {RouterProvider} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <div className={styles}>
        <RouterProvider router={AppRouter}/>
    </div>
)
