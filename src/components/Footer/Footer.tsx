"use client";

import ResponsiveDiv from "../Responsive/ResponsiveDiv";

export default function Footer() {
  return (
    <footer className="bg-green-950 py-10 text-white text-center flex flex-col gap-2">
      <ResponsiveDiv>
        <div className="flex flex-row gap-2 mx-auto">
          <p>
            <a href="https://www.instagram.com/seucampo" target="_blank">
              Instagram
            </a>
          </p>
          <p>
            <a href="mailto:seucampo@gmail.com" target="_blank">
              Email
            </a>
          </p>
        </div>
        <p>© SeuCampo 2023</p>
      </ResponsiveDiv>
    </footer>
  );
}
