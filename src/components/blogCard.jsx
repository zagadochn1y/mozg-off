import '../styles/App.css'

import arrowImage from '../images/buttonArrows.png'

function BlogCard({blogImage, blogTitle, blogDescription, blogURL}) {
    return (
        <div className="blog-card">
            <img src={blogImage} alt='blogImage' className="blog-image" />
            <div className='blog-text'>
                <h2 className="blog-title">{blogTitle}</h2>
                <p className="blog-description">{blogDescription}</p>
                <a href={blogURL}>
                    <button className='continue-button'>Читать далее
                    <img src={arrowImage} alt="Arrows" className='arrow-image'/>
                </button></a>
            </div>
        </div>
    );
}

export default BlogCard;