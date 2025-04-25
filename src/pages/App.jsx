import { useState , useRef } from 'react'
import { useNavigate, useLocation , Link} from 'react-router-dom'
import emailjs from 'emailjs-com';

import mainBrainImage from '../images/main-brain-image.png'

import cardImage1 from '../images/brainTrain.png'
import cardImage2 from '../images/aiHelper.png'
import cardImage3 from '../images/aiGeneration.png'

import blogBrain from '../images/blogBrain.png'
import blogDiet from '../images/blogDiet.png'
import blogBook from '../images/blogBook.png'

import searchGlass from '../images/glass.png'

import brainAboutUs from '../images/brainAboutUs.png'

import teamMember1 from '../images/teamMember1.png'
import teamMember2 from '../images/teamMember2.jpg'

import mailIcon from '../images/mail-icon.png'
import phoneIcon from '../images/phone-icon.png'
import instagramIcon from '../images/instagram-icon.png'

import twitterIcon from '../images/twitter-icon.png'
import instagramFooterIcon from '../images/instagram-footer-icon.png'
import facebookIcon from '../images/facebook-icon.png'

import ProgramCard from '../components/programCard'
import BlogCard from '../components/blogCard';

import FadeInSection from '../components/FadeInSection';
import HeaderSection from '../components/HeaderSection';

import '../styles/App.css'


function App() {

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const location = useLocation();
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_rere4yf',
      'template_2jjptq4',
      form.current,
      'iPldoMXt-LHtrsN-k'
    )
    .then((result) => {
      console.log('Message sent:', result.text);
      alert('Сообщение отправлено!');
    }, (error) => {
      console.log('Error:', error.text);
      alert('Произошла ошибка при отправке.');
    });

    e.target.reset(); // Очистить форму
  };
  

  return (
    <div>
      <HeaderSection />
      <FadeInSection>
        <section className='main'>
          <div className='main-text'>
            <h1>Прокачай мозг.</h1>
            <h1>Быстро.<br/>
            Умно.<br/>Навсегда.</h1>
            <Link to="/games"><button className='start-button'>Начать тренировку</button></Link>
          </div>
          <img src={mainBrainImage} alt="" className='main-image'/>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className='programSection'>
            <h1>Наши программы</h1>
            
            <div className='programCards'>
              <ProgramCard 
                cardImage={cardImage1}
                cardTitle="Тренировки мозга"
                cardText="Упражнения для развития когнитивных способностей"          
              />

              <ProgramCard 
                cardImage={cardImage2}
                cardTitle="ИИ-помощник и тренер"
                cardText="Советы для улучшения работоспособности и увеличения концентрации"          
              />

              <ProgramCard 
                cardImage={cardImage3}
                cardTitle="Генерация ИИ-аватара"
                cardText="ИИ-бот наглядно визуализирует аватар, создавая уникальный “профиль мозга”"          
              />
            </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className = "blogSection" id = "blog">
          <div className='blogHeader'>
            <h1 className='blogTitle'>Блог</h1>
            <div className="input-wrapper">
                <input
                  type="text"
                  value={value}
                  onChange={handleChange}
                  placeholder="Поиск по ключевым словам"
                  className="input"
                />
                {value === "" && (
                  <img
                    src={searchGlass}
                    className="input-icon"
                    alt="icon"
                  />
                )}
            </div>
          </div>
          <ul className='blogList'>
            <li><button>Продуктивность</button></li>
            <li><button>Наука</button></li>
            <li><button>Хаки</button></li>
            <li><button>Советы</button></li>
          </ul>

          <FadeInSection>
          <BlogCard
            blogImage={blogBrain}
            blogTitle="Как тренировать мозг эффективно"
            blogDescription="Мозг — это удивительный орган, который отвечает за все мысли, чувства, действия и восприятие людей. Он постоянно адаптируется к новым условиям и задачам. Но можно ли сделать его еще более эффективным, гибким и творческим? Как развивать свой мозг и улучшать его работу? В статье расскажем о нескольких способах, которые помогут вам усилить свои когнитивные способности и раскрыть потенциал вашего ума."
            blogURL={"https://kirovgrad.bezformata.com/listnews/nastroyka-mozga-na-uspeh/135338512/"}        
          />
          </FadeInSection>

          <FadeInSection>
          <BlogCard
            blogImage={blogDiet}
            blogTitle="Диета для продуктивной работы"
            blogDescription="Многие специалисты говорят о том, что основа жизни человека – это то, что он есть. Эта идея пришла из древности, но современники активно поддерживают эту точку зрения. Так что нужно понимать, какие продукты питания будут максимально полезны для мозга человека.
            Рацион любого человека включает в себя набор веществ, которые способствуют нормальной работе организма, могут насытить его всем требуемым и дают энергию для нормальной работы. "
            blogURL={"https://medcollegia.com/statii/kak-produkti-vliyaut-na-mozg/"}  
          />
          </FadeInSection>

          <FadeInSection>
          <BlogCard
            blogImage={blogBook}
            blogTitle="Лучшие книги для развития мышления"
            blogDescription="Быть развитым и интеллектуальным человеком желает, пожалуй, каждый, кто стремится к личностному росту и успеху. Особенно это важно в современном мире, где требуется гибкий ум и самые разносторонние знания. Развивать ум и интеллект можно совершенно разными способами, однако одним из самых популярных и эффективных по праву считается чтение книг – интересных и самих по себе развивающих. Эта статья посвящена именно такой литературе."  
            blogURL={"https://4brain.ru/blog/brain-books-list/"}      
          />
          </FadeInSection>

        </section>
      </FadeInSection>

      <section className='about-us' id = "about-us">
        <FadeInSection>
        <h1>О нас</h1>
        </FadeInSection>
        <FadeInSection>
        <div className='team-container'>
          <img src={brainAboutUs} alt="brain-about-us" className='teamImage'/>
          <h1 className='teamName'>МозгOFF</h1>
        </div>
        </FadeInSection>
        <FadeInSection>
        <p className='mission'>Миссия</p>
        <p className='about-mission'>МозгOFF  - это ииновационная платформа, предоставляющая ее пользователям возможность тренировать свой мозг благодаря различным челленджам, играм и регулярными ежедневными тренировками от ИИ-коуча. Отслеживание прогресса в личном кабинете, различные статьи и блоги, огромный комплекс различных заданий, международный масштаб - это лишь часть преимуществ нашего проекта МозгOFF.</p>
        </FadeInSection>
        <FadeInSection>
        <p className='about-team'>Наша команда</p>
        </FadeInSection>
        <FadeInSection>
        <div className='teamImages'>
            <div className='teamMember'>
              <img src={teamMember1} alt="Maidan Adiya" />
              <p className='teamInicial'>Майдан Адия</p>
              <p className='teamRole'>Дизайн и FrontEnd</p>
            </div>
            <div className='teamMember'>
              <img src={teamMember2} alt="Maidankhan Adilet" />
              <p className='teamInicial'>Майданхан Адилет</p>
              <p className='teamRole'>FrontEnd и ИИ</p>
            </div>
        </div>
        </FadeInSection>
        <FadeInSection>
          <h1 className='contact-us-title'>Связаться с нами</h1>
          <div className="contact-us-container">
            <div className='contacts'>
                <p>Контакты</p>
                <div className='mail'>
                  <img src={mailIcon} alt="mail icon" />
                  <p>mozgoff@gmail.com</p>
                </div>
                <div className='phone'>
                  <img src={phoneIcon} alt="phone icon" />
                  <div>
                    <p className='phones'>+7 707 113 79 70</p>
                    <p className='phones'>+7 771 454 04 10</p>
                  </div>
                </div>
                <div className='socials'>
                  <img src={instagramIcon} alt="instagram icon" />
                  <p>Instagram</p>
                </div>
            </div>
            <div className='contact-form'>
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name = "name" placeholder='Имя' className='input-name'/>
                <input type="text" name = "email" placeholder='Email' className='input-email'/>
                <textarea name = "message" placeholder='Сообщение' className='input-message'></textarea>
                <button type="submit" className='send-button'>Отправить</button>
              </form>
            </div>
        </div>
        </FadeInSection>
      </section>

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
    </div>
  )
}

export default App;
