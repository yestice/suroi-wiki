// TODO: Fix opengraph

// import fs from "node:fs/promises";
// import path from "node:path";
// import { ImageResponse } from "@vercel/og";
// import type { ObjectDefinition } from "@suroi/common/src/utils/objectDefinitions";
// import _svg2img from "svg2img";

// export default async function ogImageResponse(
//   obj: ObjectDefinition,
//   imgPath?: string
// ) {
//   const inter = await fs.readFile(
//     path.resolve("./public/fonts/Inter-Regular.ttf")
//   );
//   const interBold = await fs.readFile(
//     path.resolve("./public/fonts/Inter-Bold.ttf")
//   );
//   const mono = await fs.readFile(
//     path.resolve("./public/fonts/SpaceMono-Regular.ttf")
//   );

//   const logo = await fs.readFile(path.resolve("./public/img/seo/logo.png"));

//   return new ImageResponse(
//     (
//       <div
//         style={{
//           backgroundColor: "#202020",
//           display: "flex",
//           width: "100%",
//           height: "100%",
//           color: "white",
//           padding: "5%",
//           flexDirection: "column",
//           gap: "3em",
//         }}
//       >
//         <img
//           // @ts-expect-error - Special syntax for @vercel/og
//           src={logo.buffer}
//           style={{
//             width: "338px",
//             height: "96px",
//           }}
//         />
//         <div
//           style={{
//             display: "flex",
//             flex: "1 1 auto",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               flex: "1 1 auto",
//               flexDirection: "column",
//             }}
//           >
//             <h1
//               style={{
//                 fontWeight: "bold",
//                 fontSize: "8em",
//                 margin: 0,
//               }}
//             >
//               {obj.name}
//             </h1>
//             <h2
//               style={{
//                 fontFamily: "monospace",
//                 margin: 0,
//                 fontSize: "4em",
//               }}
//             >
//               {obj.idString}
//             </h2>
//           </div>
//           <div
//             style={{
//               display: "flex",
//               // alignItems: "center",
//             }}
//           >
//             {imgPath && (
//               <img
//                 style={{
//                   width: "400px",
//                   // height: "400px",
//                 }}
//                 // @ts-expect-error - Special syntax for @vercel/og
//                 src={
//                   (
//                     await svgToPng(
//                       await fs.readFile(path.resolve(imgPath), "utf-8")
//                     )
//                   ).buffer
//                 }
//               />
//             )}
//           </div>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "flex-end",
//           }}
//         >
//           <span
//             style={{
//               fontSize: "2em",
//             }}
//           >
//             <span
//               style={{
//                 textDecoration: "underline",
//                 marginRight: "1rem"
//               }}
//             >
//               wiki.suroi.io
//             </span>
//             | Suroi Official Wiki
//           </span>
//         </div>
//       </div>
//     ),
//     {
//       // 720p
//       width: 1280,
//       height: 720,
//       fonts: [
//         {
//           name: "Inter",
//           data: inter,
//           weight: 400,
//           style: "normal",
//         },
//         {
//           name: "Inter",
//           data: interBold,
//           weight: 600,
//           style: "normal",
//         },
//         {
//           // Using SpaceMono
//           name: "monospace",
//           data: mono,
//           weight: 400,
//           style: "normal",
//         },
//       ],
//     }
//   );
// }

// function svgToPng(svg: string) {
//   return new Promise<Buffer>((res, rej) =>
//     _svg2img(
//       svg,
//       {
//         // @ts-expect-error - svg2img types are wrong
//         format: "png",
//         resvg: {
//           fitTo: {
//             mode: "width", // or height
//             value: 600,
//           },
//         },
//       },
//       (err, buf) => (err ? rej(err) : res(buf))
//     )
//   );
// }
