import React from "react";
import '../style/Om.css'
import me from  '../components/images/me.jpeg'
import blueline from '../components/images/blueline.png'
import trygghet from '../components/images/trygghet.png'
import snöhus from '../components/images/snöhus.jpg'
import meagain from '../components/images/meagain.jpeg'
import desktop from '../components/images/desktop.jpeg'


function AboutUs(props) {
  return (
    <>
      <div className="div">
        <div className="div-2" />
        {/* <div className="div-3">
          <div className="div-4">Home</div>
          <div className="div-5">Om</div>
          <div className="div-6">Tjänster</div>
          <div className="div-6">Contact</div>
        </div> */}
        <div className="div-7">
          <img
            loading="lazy"
            src={me}
            className="img"
          />
          <div className="div-8">
            <div className="div-9">
              <div className="div-10">Om Oss</div>
              <div className="div-11">
              Välkommen till De Bergen!

                Hej där! Jag är Edgar Backer, 
                en glad och passionerad själ som har funnit sitt hem
                här i det vackra Ljungdalen, omgiven av den förtrollande 
                fjällvärlden. Mitt hjärta klappar för De Bergen, och jag är
                 stolt över att få dela med mig av vår historia.
              </div>
            </div>
            <div className="div-21">
                  {/* <div className="div-12">See More</div> */}              
                </div>
           
          </div>
        </div>
        <div className="div-13">
          <div className="div-14">Vad vi erbjuder dig</div>
          <img
            loading="lazy"
            src={blueline}
            className="img-2"
          />
        </div>
        <div className="div-15">
          <div className="div-16">
            <div className="column">
              <div className="div-17">
                <div className="div-18">
                  <div className="div-19">
                    Din Värd
                    <br />
                    Din Trygget
                  </div>
                  <div className="div-20">
                  Som grundare av De Bergen är mitt främsta
                   mål att skapa trygga och skräddarsydda affärer
                   för våra kunder. Varje affär är en möjlighet att
                förverkliga kundens önskemål och skapa något som inte
                 bara uppfyller förväntningarna utan överträffar dem. 
                 Jag brinner för att bygga långsiktiga relationer och 
                 göra affärer på ett sätt som känns personligt och trygga.
                  </div>
                </div>
                <div className="div-21">
                  {/* <div className="div-22">View More</div> */}
                  {/* <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d65934f7-2f8b-4eb6-b7e7-0542cf1daaaa?"
                    className="img-6"
                  /> */}
                  
                </div>
              </div>
            </div>
            <div className="column-2">
              <img
                loading="lazy"
                srcSet={trygghet}
                className="img-4"
              />
            </div>
          </div>
        </div>
        <div className="div-23">
          <div className="div-24">
            <div className="column-3">
              <div className="div-25">
                <img
                  loading="lazy"
                  src={desktop}
                  className="img"
                />
              </div>
            </div>
            <div className="column-4">
              <div className="div-26">
                <div className="div-27">
                  <div className="div-28">
                  Upptäck Charmen i Ljungdalen
                  </div>
                  <div className="div-29">
                    Ljungdalen, en varm by inbäddad mitt i fjällen
                    och omgiven av vildmarken, bjuder in dig till en
                    unik upplevelse av lugn och naturskön skönhet. 
                    Oavsett om du är här för en avkopplande stugvistelse, 
                    behöver professionell städning eller snöskottningstjänster, 
                    är De Bergen här för att göra din vistelse oförglömlig.
                  </div>
                </div>
                <div className="div-30">
                  {/* <div className="div-31">View More</div> */}
                  {/* <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d65934f7-2f8b-4eb6-b7e7-0542cf1daaaa?"
                    className="img-6"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-32">
          <div className="div-33">
            <div className="column">
              <div className="div-34">
                <div className="div-35">
                  <div className="div-36">
                    Passionerad Stugvärd 
                    <br />
                    som är där för dig
                  </div>
                  <div className="div-37">
                    Upptäck fördelarna med att samarbeta med De Bergen. 
                    Vare sig du är här för en kort paus eller en längre vistelse,
                    är vi här för att göra din tid i Ljungdalen minnesvärd och 
                    bekymmersfri. Kontakta oss idag för att diskutera hur vi kan 
                    skräddarsy våra tjänster efter dina behov.
                  </div>
                </div>
                <div className="div-38">
                  {/* <div className="div-39">View More</div> */}
                  {/* <img
                    loading="lazy"
                    src={"https://cdn.builder.io/api/v1/image/assets/TEMP/5975734c-fd20-4bf1-ae0e-52ae6a8b6818?"}
                    className="img-7"
                  /> */}
                </div>
              </div>
            </div>
            <div className="column-5">
              <img
                loading="lazy"
                src={meagain}
                className="img-8"
              />
            </div>
          </div>
        </div>
        {/* <div className="div-40">
          <div className="div-41">
            <div className="div-42">Våra Tjänster</div>
            <img
              loading="lazy"
              src={blueline}
              className="img-9"
            />
          </div>
          <div className="div-43">
            <div className="div-44">
              <div className="column-6">
                <div className="div-45">
                  <div className="div-46">
                    <div className="column-8">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="img-11"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-9">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="img-12"
                />
              </div>
              <div className="column-10">
                <div className="div-47">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="img-13"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="div-48">
          <div className="div-49">
            <div className="div-50">Varför Välja De Bergen?</div>
            <img
              loading="lazy"
              src={blueline}
              className="img-15"
            />
          </div>
          <div className="div-51">
            <div className="div-52">
              <div className="column-11">
                <div className="div-53">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6f52dba-7e36-4298-a35f-af31a418fafc?"
                    className="img-16"
                  />
                  <div className="div-54">
                    <div className="div-55">Lokal Expertis</div>
                    <div className="div-56">
                    Vi är förankrade i Ljungdalen och förstår dess unika behov och charm.
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-12">
                <div className="div-57">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b600e54d-9654-496c-837e-f2a993b1eba6?"
                    className="img-17"
                  />
                  <div className="div-58">
                    <div className="div-59">Kundfokus</div>
                    <div className="div-60">
                    Dina behov är vår prioritet, och vi strävar efter att överträffa dina förväntningar.
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-13">
                <div className="div-61">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4fa4cd9-5909-48d6-a991-6d06bcf9e34f?"
                    className="img-18"
                  />
                  <div className="div-62">
                    <div className="div-63">Professionellt Team</div>
                    <div className="div-64">
                    Våra dedikerade teammedlemmar är skickliga och engagerade i att leverera högsta kvalitet.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-65" />
      </div>
      {/* <style jsx>{`
        .div {
          background-color: #ffffe9;
          display: flex;
          flex-direction: column;
        }
        .div-2 {
          background-color: #cbcda9;
          align-self: stretch;
          display: flex;
          min-height: 53px;
          width: 100%;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
          }
        }
        .div-3 {
          align-items: flex-start;
          align-self: center;
          display: flex;
          margin-top: 35px;
          width: 304px;
          max-width: 100%;
          justify-content: space-between;
          gap: 20px;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-3 {
            justify-content: center;
          }
        }
        .div-4 {
          color: #000;
          align-self: stretch;
          font: 500 18px Inter, sans-serif;
        }
        .div-5 {
          color: #000;
          align-self: stretch;
          font: 700 18px Inter, sans-serif;
        }
        .div-6 {
          color: #000;
          align-self: stretch;
          white-space: nowrap;
          font: 500 18px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-6 {
            white-space: initial;
          }
        }
        .div-7 {
          disply: flex;
          flex-direction: column;
          overflow: hidden;
          align-self: stretch;
          position: relative;
          display: flex;
          min-height: 530px;
          margin-top: 42px;
          width: 100%;
          padding: 124px 80px;
        }
        @media (max-width: 991px) {
          .div-7 {
            max-width: 100%;
            margin-top: 40px;
            padding: 100px 20px;
          }
        }
        .img {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .div-8 {
          position: relative;
          align-items: center;
          align-self: center;
          display: flex;
          margin-bottom: -24px;
          width: 663px;
          max-width: 100%;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-8 {
            margin-bottom: 10px;
          }
        }
        .div-9 {
          align-items: center;
          align-self: stretch;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-9 {
            max-width: 100%;
          }
        }
        .div-10 {
          color: #fff;
          align-self: center;
          white-space: nowrap;
          font: 700 96px Source Serif Pro, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-10 {
            font-size: 40px;
            white-space: initial;
          }
        }
        .div-11 {
          color: #fff;
          text-align: center;
          align-self: stretch;
          font: 600 24px Lato, sans-serif;
        }
        @media (max-width: 991px) {
          .div-11 {
            max-width: 100%;
          }
        }
        .div-12 {
          color: #000;
          text-align: center;
          align-self: center;
          white-space: nowrap;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          background-color: #f3f25b;
          margin-top: 35px;
          width: 135px;
          max-width: 100%;
          flex-grow: 1;
          padding: 9px 29px;
          font: 600 18px Lato, sans-serif;
        }
        @media (max-width: 991px) {
          .div-12 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-13 {
          align-items: center;
          align-self: center;
          display: flex;
          margin-top: 88px;
          width: 780px;
          max-width: 100%;
          flex-direction: column;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-13 {
            margin-top: 40px;
          }
        }
        .div-14 {
          color: #000;
          align-self: stretch;
          margin-right: -20px;
          white-space: nowrap;
          font: 600 45px Source Serif Pro, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-14 {
            max-width: 100%;
            font-size: 40px;
            white-space: initial;
          }
        }
        .img-2 {
          aspect-ratio: 7.1;
          object-fit: contain;
          object-position: center;
          width: 284px;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          align-self: center;
          margin-top: 15px;
          max-width: 100%;
          flex-grow: 1;
        }
        .div-15 {
          align-self: center;
          margin-top: 28px;
          width: 100%;
          max-width: 1141px;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-15 {
            max-width: 100%;
          }
        }
        .div-16 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-16 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-17 {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-17 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-18 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 528px;
          max-width: 100%;
          flex-direction: column;
        }
        .div-19 {
          color: #000;
          align-self: stretch;
          align-items: flex-start;
          font: 600 36px Source Serif Pro, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-19 {
            max-width: 100%;
          }
        }
        .div-20 {
          color: #848383;
          align-self: stretch;
          margin-top: 25px;
          font: 400 20px Lato, sans-serif;
        }
        @media (max-width: 991px) {
          .div-20 {
            max-width: 100%;
          }
        }
        .div-21 {
          border-radius: 12px;
          box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.12),
            0px 2px 4px 0px rgba(0, 0, 0, 0.1) inset;
          background-color: #f3f25b;
          align-self: start;
          display: flex;
          margin-top: 25px;
          width: 242px;
          max-width: 100%;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          padding: 19px 0 0 82px;
        }
        @media (max-width: 991px) {
          .div-21 {
            padding-left: 20px;
          }
        }
        .div-22 {
          color: #000;
          text-align: center;
          align-self: center;
          margin: auto 0;
          font: 600 16px Lato, sans-serif;
        }
        .img-3 {
          aspect-ratio: 1.79;
          object-fit: contain;
          object-position: center;
          width: 100%;
          filter: drop-shadow(0px -4px 3px rgba(0, 0, 0, 0.03));
          overflow: hidden;
          flex: 1;
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .img-4 {
          aspect-ratio: 1.02;
          object-fit: contain;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .img-4 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-23 {
          align-self: center;
          margin-top: 14px;
          width: 100%;
          max-width: 1096px;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-23 {
            max-width: 100%;
          }
        }
        .div-24 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-24 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 46%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-25 {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          display: flex;
          min-height: 512px;
          flex-grow: 1;
          padding: 56px 7px 6px 19px;
        }
        @media (max-width: 991px) {
          .div-25 {
            max-width: 100%;
          }
        }
        .img-5 {
          aspect-ratio: 1.1;
          object-fit: contain;
          object-position: center;
          width: 100%;
          overflow: hidden;
          align-self: stretch;
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 54%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-26 {
          align-items: flex-end;
          display: flex;
          margin-top: 89px;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-26 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-27 {
          align-items: flex-end;
          align-self: end;
          display: flex;
          width: 618px;
          max-width: 100%;
          flex-direction: column;
        }
        .div-28 {
          color: #000;
          text-align: right;
          align-self: end;
          justify-content: flex-end;
          align-items: flex-start;
          width: 100%;
          font: 600 36px Source Serif Pro, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-28 {
            max-width: 100%;
          }
        }
        .div-29 {
          color: #848383;
          text-align: right;
          align-self: end;
          margin-top: 25px;
          max-width: 528px;
          font: 400 20px Lato, sans-serif;
        }
        @media (max-width: 991px) {
          .div-29 {
            max-width: 100%;
          }
        }
        .div-30 {
          border-radius: 12px;
          box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.12),
            0px 2px 4px 0px rgba(0, 0, 0, 0.1) inset;
          background-color: #f3f25b;
          align-self: end;
          display: flex;
          margin-top: 25px;
          width: 242px;
          max-width: 100%;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          padding: 19px 0 0 82px;
        }
        @media (max-width: 991px) {
          .div-30 {
            padding-left: 20px;
          }
        }
        .div-31 {
          color: #000;
          text-align: center;
          align-self: center;
          margin: auto 0;
          font: 600 16px Lato, sans-serif;
        }
        .img-6 {
          aspect-ratio: 1.79;
          object-fit: contain;
          object-position: center;
          width: 100%;
          filter: drop-shadow(0px -4px 3px rgba(0, 0, 0, 0.03));
          overflow: hidden;
          flex: 1;
        }
        .div-32 {
          align-self: center;
          margin-top: 51px;
          width: 100%;
          max-width: 1123px;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-32 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-33 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-33 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .div-34 {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .div-34 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-35 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 528px;
          max-width: 100%;
          flex-direction: column;
        }
        .div-36 {
          color: #000;
          align-self: stretch;
          align-items: flex-start;
          font: 600 36px Source Serif Pro, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-36 {
            max-width: 100%;
          }
        }
        .div-37 {
          color: #848383;
          align-self: stretch;
          margin-top: 25px;
          font: 400 20px Lato, sans-serif;
        }
        @media (max-width: 991px) {
          .div-37 {
            max-width: 100%;
          }
        }
        .div-38 {
          border-radius: 12px;
          box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.12),
            0px 2px 4px 0px rgba(0, 0, 0, 0.1) inset;
          background-color: #f3f25b;
          align-self: start;
          display: flex;
          margin-top: 25px;
          width: 242px;
          max-width: 100%;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          padding: 19px 0 0 82px;
        }
        @media (max-width: 991px) {
          .div-38 {
            padding-left: 20px;
          }
        }
        .div-39 {
          color: #000;
          text-align: center;
          align-self: center;
          margin: auto 0;
          font: 600 16px Lato, sans-serif;
        }
        .img-7 {
          aspect-ratio: 1.79;
          object-fit: contain;
          object-position: center;
          width: 100%;
          filter: drop-shadow(0px -4px 3px rgba(0, 0, 0, 0.03));
          overflow: hidden;
          flex: 1;
        }
        .column-5 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-5 {
            width: 100%;
          }
        }
        .img-8 {
          aspect-ratio: 1.02;
          object-fit: contain;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .img-8 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-40 {
          justify-content: center;
          align-items: center;
          background-color: #fff;
          align-self: stretch;
          display: flex;
          margin-top: 57px;
          width: 100%;
          flex-direction: column;
          padding: 25px 33px 25px 34px;
        }
        @media (max-width: 991px) {
          .div-40 {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        .div-41 {
          align-items: center;
          align-self: center;
          display: flex;
          width: 284px;
          max-width: 100%;
          flex-direction: column;
        }
        .div-42 {
          color: #000;
          align-self: center;
          white-space: nowrap;
          font: 600 45px Source Serif Pro, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-42 {
            font-size: 40px;
            white-space: initial;
          }
        }
        .img-9 {
          aspect-ratio: 7.1;
          object-fit: contain;
          object-position: center;
          width: 100%;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          align-self: stretch;
          margin-top: 15px;
          flex-grow: 1;
        }
        .div-43 {
          align-self: stretch;
          margin-top: 35px;
        }
        @media (max-width: 991px) {
          .div-43 {
            max-width: 100%;
          }
        }
        .div-44 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-44 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-6 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 38%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-6 {
            width: 100%;
          }
        }
        .div-45 {
        }
        @media (max-width: 991px) {
          .div-45 {
            margin-top: 19px;
          }
        }
        .div-46 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-46 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-7 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 21%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-7 {
            width: 100%;
          }
        }
        .img-10 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 45px;
          overflow: hidden;
          max-width: 100%;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .img-10 {
            margin-top: 40px;
          }
        }
        .column-8 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 79%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-8 {
            width: 100%;
          }
        }
        .img-11 {
          aspect-ratio: 0.63;
          object-fit: contain;
          object-position: center;
          width: 100%;
          overflow: hidden;
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .img-11 {
            margin-top: 40px;
          }
        }
        .column-9 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 37%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-9 {
            width: 100%;
          }
        }
        .img-12 {
          aspect-ratio: 0.9;
          object-fit: contain;
          object-position: center;
          width: 100%;
          overflow: hidden;
          margin-top: 54px;
          flex-grow: 1;
        }
        @media (max-width: 991px) {
          .img-12 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .column-10 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 25%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-10 {
            width: 100%;
          }
        }
        .div-47 {
          display: flex;
          width: 100%;
          max-width: 329px;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-47 {
            margin-top: 19px;
          }
        }
        .img-13 {
          aspect-ratio: 0.63;
          object-fit: contain;
          object-position: center;
          width: 251px;
          overflow: hidden;
          align-self: stretch;
          max-width: 100%;
          flex-grow: 1;
          flex-basis: auto;
        }
        .img-14 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 45px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
          margin: auto 0;
        }
        .div-48 {
          justify-content: center;
          align-items: center;
          align-self: center;
          display: flex;
          margin-top: 105px;
          width: 100%;
          max-width: 1102px;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-48 {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .div-49 {
          align-items: center;
          align-self: center;
          display: flex;
          width: 293px;
          max-width: 100%;
          flex-direction: column;
          padding: 0 20px;
        }
        .div-50 {
          color: #000;
          align-self: stretch;
          margin-right: -20px;
          white-space: nowrap;
          font: 600 45px Source Serif Pro, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-50 {
            font-size: 40px;
            white-space: initial;
          }
        }
        .img-15 {
          aspect-ratio: 7.33;
          object-fit: contain;
          object-position: center;
          width: 100%;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          align-self: stretch;
          flex-grow: 1;
          margin: 15px -20px 0 0;
        }
        .div-51 {
          align-self: stretch;
          margin-top: 20px;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-51 {
            max-width: 100%;
          }
        }
        .div-52 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-52 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column-11 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column-11 {
            width: 100%;
          }
        }
        .div-53 {
          align-items: center;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-53 {
            margin-top: 40px;
          }
        }
        .img-16 {
          aspect-ratio: 1.1;
          object-fit: contain;
          object-position: center;
          width: 110px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
        }
        .div-54 {
          align-items: center;
          align-self: stretch;
          display: flex;
          margin-top: 24px;
          flex-grow: 1;
          flex-direction: column;
        }
        .div-55 {
          color: #000;
          align-self: center;
          white-space: nowrap;
          font: 600 24px Source Serif Pro, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-55 {
            white-space: initial;
          }
        }
        .div-56 {
          color: #000;
          text-align: center;
          align-self: stretch;
          margin-top: 10px;
          font: 400 18px Lato, sans-serif;
        }
        .column-12 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-12 {
            width: 100%;
          }
        }
        .div-57 {
          align-items: center;
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-57 {
            margin-top: 40px;
          }
        }
        .img-17 {
          aspect-ratio: 1.3;
          object-fit: contain;
          object-position: center;
          width: 130px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
        }
        .div-58 {
          align-items: center;
          align-self: stretch;
          display: flex;
          margin-top: 24px;
          flex-grow: 1;
          flex-direction: column;
        }
        .div-59 {
          color: #000;
          align-self: center;
          white-space: nowrap;
          font: 600 24px Source Serif Pro, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-59 {
            white-space: initial;
          }
        }
        .div-60 {
          color: #000;
          text-align: center;
          align-self: stretch;
          margin-top: 10px;
          font: 400 18px Lato, sans-serif;
        }
        .column-13 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-13 {
            width: 100%;
          }
        }
        .div-61 {
          align-items: center;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .div-61 {
            margin-top: 40px;
          }
        }
        .img-18 {
          aspect-ratio: 1.32;
          object-fit: contain;
          object-position: center;
          width: 132px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
        }
        .div-62 {
          align-items: center;
          align-self: stretch;
          display: flex;
          margin-top: 24px;
          flex-grow: 1;
          flex-direction: column;
        }
        .div-63 {
          color: #000;
          align-self: center;
          white-space: nowrap;
          font: 600 24px Source Serif Pro, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-63 {
            white-space: initial;
          }
        }
        .div-64 {
          color: #000;
          text-align: center;
          align-self: stretch;
          margin-top: 10px;
          font: 400 18px Lato, sans-serif;
        }
        .div-65 {
          background-color: #f4ed5e;
          align-self: stretch;
          display: flex;
          min-height: 10px;
          width: 100%;
          flex-direction: column;
          margin: 156px 0 88px;
        }
        @media (max-width: 991px) {
          .div-65 {
            max-width: 100%;
            margin: 40px 0;
          }
        }
      `}</style> */}
    </>
  );
}



export default AboutUs

