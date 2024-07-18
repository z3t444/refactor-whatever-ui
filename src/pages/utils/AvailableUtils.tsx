import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export default function AvailableUtils() {
  return (
    <div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <h1 className="text-2xl font-semibold">Responsif dan Mobile-Friendly</h1>
        <p className="max-w-lg text-sm dark:text-neutral-300  mt-3">
          Desain responsif memastikan bahwa tampilan situs web atau aplikasi Anda dapat menyesuaikan diri dengan berbagai ukuran layar, baik itu
          desktop, tablet, atau ponsel.
        </p>
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="mt-4">
        <h1 className="text-2xl font-semibold">Navigasi Intuitif</h1>
        <p className="max-w-lg text-sm dark:text-neutral-300  mt-3">
          Pemilihan menu dan struktur navigasi harus disesuaikan dengan kebutuhan dan preferensi pengguna pada platform yang bersangkutan.
        </p>
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="mt-4">
        <h1 className="text-2xl font-semibold">Konsistensi Desain</h1>
        <p className="max-w-lg text-sm dark:text-neutral-300  mt-3">
          Penting untuk mempertahankan konsistensi desain antara desktop dan mobile untuk menciptakan pengalaman pengguna yang menyatu.
        </p>
      </div>
    </div>
  );
}
