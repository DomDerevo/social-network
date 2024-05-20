import ava_min from '../../../../img/ilonSmall.jpg'

function Post(props) {
    return (
        <div className="post">
            <img src={ava_min} alt="" />
            <span>Elon Mask</span>
            <p>
                {props.message}
            </p>
        </div>
    )
}

export default Post;