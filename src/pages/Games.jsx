import { Link } from 'react-router-dom'

import HeaderSection from '../components/HeaderSection';
import ExerciseCard from '../components/exerciseCard';

import exercise1 from '../images/memory-image.png'
import exercise2 from '../images/numbers-image.png'
import exercise3 from '../images/stars-image.png'
import exercise4 from '../images/colors-image.png'
import exercise5 from '../images/clicks-image.png'
import exercise6 from '../images/differences-image.png'
import exercise7 from '../images/scales-image.png'
import exercise8 from '../images/pyramid-image.png'
import exercise9 from '../images/labyrinth-image.png'

import twitterIcon from '../images/twitter-icon.png'
import instagramFooterIcon from '../images/instagram-footer-icon.png'
import facebookIcon from '../images/facebook-icon.png'

import FadeInSection from '../components/FadeInSection';

import '../styles/App.css'

export default function Games()  {
    return (
        <>
            <HeaderSection />
            <section className='exercises'>
                <FadeInSection>
                <div className='exercises-container'>
                    <h1 className='title-text'>Упражнения для мозга</h1>
                    <p className='description-text'>Выполняйте разнообразные упражнения, направленные на улучшение когнитивных функций, памяти, внимания и способности решать проблемы. Выбирайте задачи, которые лучше всего соответствуют вашим целям тренировок, и смотрите на прогресс в реальном времени.</p>
                </div>
                </FadeInSection>

                <FadeInSection>
                <div className='exercises-row'>
                    <h2 className = 'exercises-title'>Усилители памяти</h2>
                    <div className='exercises-cards'>
                        <Link to="/memoryGame" className='exercise-card-link'>
                            <ExerciseCard 
                                image = {exercise1}
                                title = "Цветовая Память"
                                description = "На экране появляется последовательность цветов. Игрок должен повторить ее, кликая по кнопкам с цветами."
                                
                            />
                        </Link>
                        
                        <Link to="/numbersGame" className='exercise-card-link'>
                        <ExerciseCard 
                            image = {exercise2}
                            title = "Последовательность Цифр"
                            description = "Запоминай последовательности чисел и вводи их в правильном порядке. Сложность влияет на длину последовательности."
                        />
                        </Link>

                        <Link to="/clickGame" className='exercise-card-link'>
                        <ExerciseCard 
                            image = {exercise3}
                            title = "Запомни Пары"
                            description = "Найди совпадающие пары на сетке, запоминая их расположение. Сложность влияет на количество пар."
                        />
                        </Link>
                    </div>
                </div>
                </FadeInSection>

                <FadeInSection>
                <div className='exercises-row'>
                    <h2 className = 'exercises-title'>Концентрация & Фокус</h2>
                    <div className='exercises-cards'>

                        <Link to="/clickGame" className='exercise-card-link'>
                        <ExerciseCard 
                            image = {exercise4}
                            title = "Найди отличающийся цвет"
                            description = "Появляется сетка одинаковых квадратов, но один из них чуть-чуть отличается по цвету. Игроку нужно как можно быстрее его найти."
                        />

                        </Link>
                        <Link to="/clickGame" className='exercise-card-link'>
                        <ExerciseCard 
                            image = {exercise5}
                            title = "Запомни порядок кликов"
                            description = "Игрок должен запомнить и повторить порядок, в котором мигнули квадраты."
                        />
                        </Link>
                        <Link to="/findDifference" className='exercise-card-link'>
                        <ExerciseCard 
                            image = {exercise6}
                            title = "Найди различие"
                            description = "На экране 3 похожих фигуры - найди, чем одна из них отличается."
                        />
                        </Link>
                    </div>
                </div>
                </FadeInSection>

                <FadeInSection>
                <div className='exercises-row'>
                    <h2 className = 'exercises-title'>Problem Solving задачи</h2>
                    <div className='exercises-cards'>
                        <Link to="/findDifference" className='exercise-card-link'>
                        <ExerciseCard 
                            image = {exercise7}
                            title = "Математические весы"
                            description = "Игрок видит уравновешенные и неуравновешенные весы с фигурами. Задача — определить, сколько “весит” каждая фигура."
                        />
                        </Link>

                        <Link to="/pyramidGame" className='exercise-card-link'>
                        <ExerciseCard 
                            image = {exercise8}
                            title = "Числовая пирамида"
                            description = "Игроку нужно заполнить пустые ячейки числовой пирамиды так, чтобы каждое верхнее число было суммой двух чисел под ним. Игра имеет три уровня сложности, с разной высотой пирамиды."
                        />
                        </Link>

                        <Link to="/clickGame" className='exercise-card-link'>
                        <ExerciseCard 
                            image = {exercise9}
                            title = "Лабиринт логики"
                            description = "Игроку предстоит найти путь через логический лабиринт: от старта до финиша, следуя простым математическим правилам (четное, нечетное и т.д.) "
                        />
                        </Link>
                    </div>
                </div>
                </FadeInSection>
            </section>
            <FadeInSection>
            <footer>
                <div className='footer-container'>
                <div className='footer-icons'>
                    <img src={twitterIcon} alt="twitter icon" />
                    <img src={instagramFooterIcon} alt="instagram icon" />
                    <img src={facebookIcon} alt="facebook icon" />
                </div>
                <p>@2025 МозгOFF. Все права защищены.</p>
                </div>
            </footer>
            </FadeInSection>
        </>
    )
}
