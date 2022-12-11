import centr from './img/centr.png';
import './Center.css';
function Center() {
    return (
        <div id="center">
            <img src={centr} />
            <div class="zag">
                <span> Spin!</span>
                <span>[re]designing</span>
                <span>your business</span>
            </div>
        </div>
    )
}
export default Center;