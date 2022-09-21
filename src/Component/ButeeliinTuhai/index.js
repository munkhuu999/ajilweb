import React from "react";


const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
              Бүтээлийн тухай
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Үнэлгээ өгөх
              </a>
            </li>
            {/* <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Options
              </a>
            </li> */}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                  Өндөр боловсролтой, өргөн мэдлэгтэй, юм үзэж нүд тайлсан эрдэмт хүн тэр өндөр, дээд түвшнээсээ Монголын гэсэн бүхнээ улам бүр төгөлдөржүүлэхийг л хичээдэг болохоос биш бусад улс үндэстний үнэ цэнтэй зүйл, ололтуудыг шууд хуулбарлан авах, сармагчин мэт дууриахыг урьтал болгодоггүй. Гэтэл өнөө үед Монголоор нэг хуулбарлагчид, дууриагчид буй болчихлоо. Яг тийм өрөөсгөл бодолтонгууд боловсролын системийг 30-аад жил үймүүлчихлээ. Нэг сайд гарч ирээд л 4 жил үймүүлдэг. Удаах нь гарч ирээд 4 жил тоглочихдог боллоо.
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                  Монгол Улсын Ерөнхийлөгч Ухнаагийн Хүрэлсүхийн санаачилга, өгсөн үүрэг, чиглэлийн дагуу Хэрлэн голыг хамгаалах ажил эхэллээ.
                  </p>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;








