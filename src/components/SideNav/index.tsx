//Imports
import images from "../../assets/images";
import Activity from "./Activity";
import style from "./style.module.scss";

//Exports
export default function SideNav() {
    return (
        <section className={style.sideNav}>
            <p className={style.copyrights}>Copyright, SportSee 2020</p>
            <nav className={style.activities}>
                <Activity icon={images.meditation} />
                <Activity icon={images.swimming} />
                <Activity icon={images.bikeRiding} />
                <Activity icon={images.workout} />
            </nav>
        </section>
    );
}
