import React from 'react'
import { useParams } from 'react-router-dom'
import DataBlog from './DataBlog'


const DetailBlog = () => {
    const { id } = useParams()
    const blog = DataBlog.find((item) => item.id === parseInt(id))
    const { title, img, descript } = blog

  return (
    <>
        <section className="Detail-blog">
            <article className="container">
                <h2 className="title">{title}</h2>
                <img src={img} alt={title} width={500} height={250} className="center image"/>
                <p className="descript">{descript}</p>
            </article>
        </section>
    </>
  )
}

export default DetailBlog