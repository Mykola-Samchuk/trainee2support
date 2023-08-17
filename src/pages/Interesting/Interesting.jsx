import React, { useState } from "react";
import "./interesting.scss";
import Banner from "../../components/Banner/Banner";
import Modal from "../../components/Modal/Modal";
import { useLoaderData } from "react-router-dom";

export default function Interesting() {
  // modal open\clode
  const [modalActive, setModalActive] = useState(false);

  // state for modal content
  const [modalContent, setModalContent] = useState();

  // fetch data route
  const data = useLoaderData();

  // public place for img
  const path = process.env.PUBLIC_URL;

  return (
    <main>
      <Banner title={"Цікаво знати"} text={"Перша лінія"} bgLite={true} />

      <section className="section-content">
        <div className="interesting-wrapp">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className={`interest-card`}
                onClick={(e) => {
                  e.stopPropagation();
                  setModalActive(!modalActive);
                  setModalContent(item);
                }}
              >
                <div
                  className={`interested-type ${
                    // background color for type
                    item.type === "portal"
                      ? "blue"
                      : item.type === "billing"
                      ? "purple"
                      : item.type === "kasa" || item.type === "pay link"
                      ? "black"
                      : item.type === "dps"
                      ? "orange"
                      : item.type === "android app"
                      ? "green"
                      : "grey"
                  }`}
                >
                  <p>{item.type}</p>
                </div>
                <div className="interest-img">
                  <img src={path + item.img} alt="log-img" />
                </div>
                <div className="interest-title-wrapp">
                  <div className="title">
                    <h5>{item.title}</h5>
                  </div>
                </div>
              </div>
            );
          })}
          <Modal modalActive={modalActive} setModalActive={setModalActive}>
            <div className="card-content">
              <div className="card-img">
                <img src={path + modalContent?.img} alt="card-img" />
              </div>

              <h4>{modalContent?.info}</h4>
            </div>
          </Modal>
        </div>
      </section>
    </main>
  );
}
