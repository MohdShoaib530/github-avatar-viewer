import './Image.css';

function Image({ src,key,name }) {
  return (
    <div className="image-wrapper">
        <div className='name'>{name}</div>
        <div ><img src={src} alt="" key={key} className='image'/></div>
    </div>
  );
}

export default Image;
