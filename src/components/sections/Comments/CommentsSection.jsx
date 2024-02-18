import React from "react";

const CommentsSection = () => {
  return (
    <section className="py-4">
      <div className="container d-flex flex-column gap-3">
        <h3>Comments left by <span className="text-primary">users</span></h3>

        <div className="box-comment">
          <div className="d-flex align-items-center gap-2">
            <img
              style={{ width: "50px", height: "50px" }}
              src="https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"
              alt=""
            />
            <div className="mt-2">
              <h5>Adrinila</h5>
              <p style={{ marginTop: "-0.6rem" }} className="text-secondary">
                4 day ago
              </p>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              sapiente fugit accusantium eveniet, maiores quos, corporis
              cupiditate nesciunt, deserunt adipisci assumenda. Eligendi
              voluptas accusantium maiores ex sapiente dolorem. Consequatur,
              quibusdam?
            </p>
          </div>
        </div>
        <div className="box-comment">
          <div className="d-flex align-items-center gap-2">
            <img
              style={{ width: "50px", height: "50px" }}
              src="https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg"
              alt=""
            />
            <div className="mt-2">
              <h5>Eforia</h5>
              <p style={{ marginTop: "-0.6rem" }} className="text-secondary">
                1 month ago
              </p>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              perferendis recusandae reprehenderit nam animi quis tempore esse,
              cum consectetur? Cum sint sunt veniam totam ex ratione voluptas
              ipsam commodi quod, nemo dolorem numquam eaque tempore magni a.
              Aspernatur porro suscipit minus et, fuga quo unde voluptatem earum
              voluptas enim neque quos nesciunt expedita praesentium perferendis
              eligendi ratione nisi magni sit?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentsSection;
