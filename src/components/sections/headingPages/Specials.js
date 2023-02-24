import Carousel from './SpecialsCarousel';
import BenedictEggs from '../../../assets/food/benedicteggs.webp';
import Miso from '../../../assets/food/miso.jpeg';
import LemonPoppy from '../../../assets/food/lemon.webp';
import SpecialCard from './CardInfo/SpecialCard';

export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <a className="action-button" href={require('../../../assets/menu.webp')} target="_blank" rel="noreferrer">Online Menu</a>
            </article>

            <section className="specials-cards">
                <SpecialCard image={BenedictEggs} name="Benedict Eggs" price="$11.99" description="Benedict eggs, a brunch staple consisting of poached eggs and Canadian bacon or sliced ham on an English muffin, topped with hollandaise sauce (a rich and creamy concoction made with egg yolks, butter, lemon juice or vinegar, and various seasonings)."/>
                <SpecialCard image={Miso} name="Miso croque madame" price="$20.99" description="a French ham and cheese dish on buttered bread,  made with thinly sliced baked or boiled ham and sliced creamy Emmental or Gruyère cheese"/>
                <SpecialCard image={LemonPoppy} name="Lemon Poppy Seed" price="$18.50" description="This healthy whole-grain lemon-poppy seed pancake recipe gets a protein boost and an amazing texture from the addition of part-skim ricotta cheese."/>
            </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}