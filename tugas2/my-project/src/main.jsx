import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

function Main() {
  return (
    <main className="p-4">
      <section className="mb-4" id="about">
        <h2 className="text-3xl font-bold text-center pt-10 pb-1 mt-auto text-emerald-800">About Me</h2>
        <p className='m-10 bg-emerald-800 mb-4 rounded-[40px] p-14 pl-20 pr-20 flex-col items-center justify-center space-y-4 text-rose-50'>Saya, Djukallita Tafiana Djoewarsa atau biasa dipanggil Kallita, seorang mahasiswi Fakultas Teknik Universitas Indonesia di jurusan Teknik Komputer. Saya adalah pribadi yang memiliki semangat tinggi untuk terus belajar dan berkembang. Dengan latar belakang yang kuat dalam teknologi dan problem-solving, saya selalu berusaha untuk mengatasi tantangan dengan pendekatan yang sistematis dan efektif. Saya memiliki kemampuan komunikasi yang baik dan senang bekerja sama dalam tim untuk mencapai tujuan bersama. Ketekunan dan dedikasi adalah nilai-nilai yang saya pegang teguh, dan saya selalu berkomitmen untuk memberikan hasil terbaik dalam setiap proyek yang saya kerjakan. Selain itu, saya percaya bahwa setiap pengalaman adalah kesempatan untuk belajar hal baru dan meningkatkan diri. Saya juga memiliki kemampuan untuk beradaptasi dengan cepat di lingkungan yang dinamis dan selalu berusaha menjaga hubungan yang baik dengan rekan kerja maupun klien. Saya sangat menghargai kerjasama tim, tetapi juga dapat bekerja secara mandiri dan bertanggung jawab dalam mengelola waktu serta menyelesaikan tugas dengan efisien. Saya percaya bahwa kerja keras, sikap positif, dan rasa tanggung jawab adalah kunci untuk mencapai kesuksesan dalam setiap aspek kehidupan.</p>
      </section>

      <section id="work">
        <h2 className="text-3xl font-bold text-center pt-10 pb-5">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {}
          <div className="bg-emerald-800 rounded-lg shadow-md p-4 m-4">
            <h3 className="text-2xl font-bold text-center text-rose-50">Intern Exercise</h3>
            <p className="text-rose-50 mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus beatae id unde totam, fuga maiores voluptatem? Dolor, sit, neque vero aut placeat autem excepturi nam, reprehenderit maiores soluta quidem earum.</p>
          </div>

          {}
          <div className="bg-emerald-800 rounded-lg shadow-md p-4 m-4">
            <h3 className="text-2xl font-bold text-center text-rose-50">Volunteer at Involuntir</h3>
            <p className="text-rose-50 mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus beatae id unde totam, fuga maiores voluptatem? Dolor, sit, neque vero aut placeat autem excepturi nam, reprehenderit maiores soluta quidem earum.</p>
          </div>

          {}
          <div className="bg-emerald-800 rounded-lg shadow-md p-4 m-4">
            <h3 className="text-2xl font-bold text-center text-rose-50">HR staff at Alteredu</h3>
            <p className="text-rose-50 mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus beatae id unde totam, fuga maiores voluptatem? Dolor, sit, neque vero aut placeat autem excepturi nam, reprehenderit maiores soluta quidem earum.</p>
          </div>

          {}
          <div className="bg-emerald-800 rounded-lg shadow-md p-4 m-4">
            <h3 className="text-2xl font-bold text-center text-rose-50">PJ Tenants AlpusInc</h3>
            <p className="text-rose-50 mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus beatae id unde totam, fuga maiores voluptatem? Dolor, sit, neque vero aut placeat autem excepturi nam, reprehenderit maiores soluta quidem earum.</p>
          </div>

        </div>
      </section>

      <h3 className="text-2xl font-bold text-center pt-10 pb-1 mt-auto" id="follow">Follow me!</h3>
      <section className="flex space-x-4 p-4 justify-center">
      <a href="mailto:kallitadjoe25@gmail.com" target="_blank">
        <img src="https://png.pngtree.com/png-clipart/20200721/original/pngtree-gmail-logo-png-png-image_4839469.jpg" width={50} alt="Gmail Logo">
        </img>
      </a>

      <a href="https://www.instagram.com/kallitadjoewarsa" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" width={40}> 
        </img>
      </a>

      <a href="https://www.tiktok.com/luaspermukaan" target="_blank">
        <img src="https://static.vecteezy.com/system/resources/previews/016/716/450/non_2x/tiktok-icon-free-png.png" width={50}> 
        </img>
      </a>
      </section>


    </main>
  );
}

export default Main;
