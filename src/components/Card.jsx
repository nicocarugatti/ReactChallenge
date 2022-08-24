
export const Card = (props) => {
  const { mainImg, avatar, text1, text2 } = props;
  return (
    <div className="Card card mb-4">
      <img src={mainImg} className="Img-card" />
      <div className="Container-footer card-body d-flex align-items-center mt-2">
        <img src={avatar} className="Img-avatar" />
        <div className="Container-text">
          <div className="Text-1">{text1}</div>
          <div className="Text-2">{text2}</div>
        </div>
      </div>
    </div>
  );
};
