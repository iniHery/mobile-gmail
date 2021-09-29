import Link from "next/link";

const AkunPage = () => {
  return (
    <div className="akun">
      <div className="header-akun">
        <Link href="/">
          <a>
            <img className="btn-cancel" src="/cancel.png" alt="icon" />
          </a>
        </Link>
        <img className="brand" src="/google.png" alt="icon" />
      </div>
      <div className="wrapping-profile">
        <div className="account">
          <img src="/profile.png" alt="icon"/>
          <div className="description-akun">
            <h4>Sumanto</h4>
            <p>
              sumanto666@gmail.com <span>99+</span>
            </p>
          </div>
        </div>
      </div>
      <div className="kelola-akun">
        <h3>Kelola Akun Google Anda</h3>
      </div>

      <hr/>

      <div className="wrapping-profile">
        <div className="account">
          <img src="/profile.png" alt="icon"/>
          <div className="description-akun">
            <h4>Sumanto</h4>
            <p>
              sumanto666@gmail.com <span>99+</span>
            </p>
          </div>
        </div>
      </div>
      <div className="wrapping-profile">
        <div className="account">
          <img src="/profile.png" alt="icon"/>
          <div className="description-akun">
            <h4>Sumanto</h4>
            <p>
              sumanto666@gmail.com <span>99+</span>
            </p>
          </div>
        </div>
      </div>
      <div className="wrapping-profile">
        <div className="account">
          <img src="/profile.png" alt="icon"/>
          <div className="description-akun">
            <h4>Sumanto</h4>
            <p>
              sumanto666@gmail.com <span>99+</span>
            </p>
          </div>
        </div>
      </div><div className="wrapping-profile">
        <div className="account">
          <img src="/profile.png" alt="icon"/>
          <div className="description-akun">
            <h4>Sumanto</h4>
            <p>
              sumanto666@gmail.com <span>99+</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AkunPage;
