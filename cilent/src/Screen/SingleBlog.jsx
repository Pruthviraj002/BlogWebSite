import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

function SingleBlog() {
    const location = useLocation()
    const navigate = useNavigate()
    const isLoading = useSelector(state => state.user.isLoading)


    const { title, content } = location.state || {
        title: "no title",
        content: " no content"
    }

    function navigateBack() {
        navigate('/blog')
    }
    return (
        <div>
            <div className={isLoading ? 'loader' : ''}>
                <ClipLoader size={100} color='white' loading={isLoading} />

            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 my-5">
                        <div className="card text-center shadow-lg">
                            <div className="card-title">
                                <h3>
                                    {title}
                                </h3>
                            </div>
                            <div className="card-body">
                                <p>{content}</p>
                            </div>
                        </div>
                        <button className='btn btn-dark my-5' onClick={() => { navigateBack() }} >back</button>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog