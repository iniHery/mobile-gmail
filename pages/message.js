import Link from "next/link";

const MessagePage = () => {
  return (
    <div className="body">
      <div className="logo-message">
        <Link href="/">
          <img className="btn-back" src="/left.png" />
        </Link>
        <div>
          <img className="btn-feature" src="/archive.png" />
          <img className="btn-feature" src="/trash.png" />
          <img className="btn-feature" src="/envelope.png" />
          <img
            style={{ paddingRight: "0px" }}
            className="btn-feature"
            src="/dots.png"
          />
        </div>
      </div>

      <div>
        <div className="heading-message">
          <h3>
            Tugas bar : "KD 3.3. SEJARAH HAKI DI INDONESIA"
            <span>Kotak Masuk</span>
          </h3>
          <button>
            <img src="/star.png" />
          </button>
        </div>
      </div>

      <div>
        <div className="sender">
          <div>
            <img className="profile-sender" src="/profile.png" />
          </div>
          <div>
            <h5>
              I Wayan Gunawan (Class... <span>20 Sep</span>
            </h5>
            <p>Kepada saya</p>
          </div>
          <button>
            <img src="/undo.png" />
            <img src="/dots.png" />
          </button>
        </div>
      </div>

      <div className="content-message">
        <div className="wrapping-content-main">
          <div>
            <img className="logo-gcr" src="/logo-gcr.png" />
          </div>
          <div>
            <img className="gcr" src="/gcr.png" />
          </div>
        </div>

        <div className="description-message">
          <p>Hai Gusher,</p>
          <p>I Wayan Gunawan memposting tugas baru</p>
          <p>
            di <span>XI MM 1 (21-22) Tahun Pelajaran 2021/2022</span>
          </p>
        </div>

        <div>
          <div className="main-message">
            <div>
              <img src="/profile.png" />
            </div>
            <div className="heading-main-message">
              <h5>TUGAS BARU</h5>
              <h3>KD 3.3. SEJARAH HAKI DI INDONESIA</h3>
              <p>
                Silahkan pelajari KD 3.3. Sejarah HAKI di Indonesia, pada google
                site, kemudian buatlah kliping tentang " Hukum Dalam Pembajakan
                "
              </p>
              <div className="description-main-message">
                <p>
                  1.Searching di google search, kemudian copy-paste di ms office
                  word, dan buat 5 Pelanggaran Hukum dalam Pembajakan jadikan 1
                  file!;
                </p>
                <p>2. Isi nama, kelas, nomor absen;</p>
                <p>
                  3. Isilah alamat laman web tersebut sebagai daftar pustaka,
                  sebagai bagian menghargai karya HAKI di bidang Multimedia,
                  (dalam kompetensi web disain);
                </p>
                <p>4. Ubahlah format .doc, .docx ke format .PDF;</p>
                <p>
                  5. Kemudian unggah/upload pada google form yang telah
                  disediakan, Kemudian klik Turn In atau Serahkan, suksme!
                </p>
                <div className="description-main-message-bottom">
                  <button>Buka</button>
                  <p>Diposting pada 19 Sep oleh I Wayan Gunawan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="main-bottom-message">
            <img src="/google2.png" />
            <p>
              Google LLC 1600 Amphitheatre Parkway, Mountain View, CA 94043,
              Amerika Serikat Jika Anda tidak ingin menerima email dari Kelas,
              Anda dapat berhenti berlangganan.
            </p>
          </div>
          <div className="message-button">
            <div>
              <button>
                <img src="/undo.png" />
                <p>Balas</p>
              </button>
            </div>
            <div>
              <button>
                <img src="/undo-all.png" />
                <p>Balas ke semua</p>
              </button>
            </div>
            <div>
              <button>
                <img src="/redo.png" />
                <p>Teruskan</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
