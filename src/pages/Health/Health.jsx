import React from "react";

const Health = () => {
  return (
    <div>
      <section className="py-4">
        <div className="container">
          <div
            style={{
              width: "100%",
              border: "1px solid grey",
              borderRadius: "10px",
              height: "600px",
              padding: "2rem 7rem",
              display:"flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
            <div className="d-flex align-items-center gap-3">
              <img
                style={{ borderRadius: "50%", width: "40px", height: "40px" }}
                src="https://lh3.googleusercontent.com/a/ACg8ocIB9Misrx53Ppsqb-y4fTwqtu5D7kVJDUq31U7wd9Gg=s64-c-mo"
                alt=""
              />
              <p className="mt-2">Hello</p>
            </div>
            <div className="d-flex justify-content-end align-items-center gap-3"><button className="btn btn-light">Show drafts</button> <img style={{width: "25px" , height: "25px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimQnXuuXNEdGLFe1X6fIHPrboXkdLTYqQ-GrvV1P5YS5FANFYjIVugTa2VRiWW-wsAQs&usqp=CAU" alt="" /></div>
            <div className="d-flex align-items-center gap-3 mt-3">
              <img
                style={{ borderRadius: "50%", width: "50px", height: "50px" , marginLeft: "-5px" }}
                src="data:image/png;base64,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"
                alt=""
              />
              <p className="mt-3">
Hello!  I'm happy to hear from you. What would you like to talk about today?</p>
            </div>
            </div>
           <div>
           <input type="text" className="form-control w-100"  style={{height: "60px" , borderRadius: "25px" , border:"1px solid black" } } placeholder="Enter a prompt here "/>
            <p className="text-secondary text-center">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps</p>
           </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Health;
