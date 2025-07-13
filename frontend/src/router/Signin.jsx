import { useEffect, useState } from "react";
import "./signup.css"; // reuse the same CSS

function Signin() {
    let image = [
        'https://i.pinimg.com/736x/ae/fb/da/aefbda6813691770df40ab56c22e43e1.jpg',
        'https://i.pinimg.com/736x/14/79/9f/14799f7d1b7f3ceb95b09791b02f70fd.jpg',
        'https://i.pinimg.com/1200x/ec/31/87/ec318775b97af61e31b923f07718001c.jpg',
        'https://i.pinimg.com/1200x/b2/c1/4a/b2c14a9316ab35f0152b009d750fbdfd.jpg'
    ];

    const [count, setcount] = useState(0);
    const [img, setimg] = useState(image[0]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const newCount = (count + 1) % image.length;
            setcount(newCount);
            setimg(image[newCount]);
        }, 5000);

        return () => clearTimeout(timer);
    }, [count]);

    return (
        <>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 d-flex shadow-lg" style={{ borderRadius: '15px' }}>

                        {/* Left Image Panel */}
                        <div
                            className="col-md-6 d-none d-md-block"
                            style={{
                                background: `url(${img}) no-repeat center center`,
                                backgroundSize: 'cover',
                                borderTopLeftRadius: '15px',
                                borderBottomLeftRadius: '15px'
                            }}
                        ></div>

                        {/* Right Form Panel */}
                        <div className="col-md-6 form-container" style={{ backgroundColor: '#2a243c', borderTopRightRadius: '15px', borderBottomRightRadius: '15px', padding: '40px' }}>
                            <h3 className="mb-2">Sign in to your account</h3>
                            <p className="mb-4">Don't have an account? <a href="#" className="text-decoration-none text-light">Sign up</a></p>

                            <form>
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="mb-3 position-relative">
                                    <input type="password" className="form-control" placeholder="Enter your password" />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Sign In</button>
                            </form>

                            <hr className="my-4" style={{ borderTop: '1px solid #666' }} />

                            <p className="text-center">Or sign in with</p>
                            <div className="d-flex justify-content-center gap-3">
                                <button className="btn btn-outline-light d-flex align-items-center">
                                    <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" style={{ height: '20px', marginRight: '10px' }} /> Google
                                </button>
                                <button className="btn btn-outline-light d-flex align-items-center">
                                    <img src="https://img.icons8.com/ios-filled/50/ffffff/mac-os.png" alt="Apple" style={{ height: '20px', marginRight: '10px' }} /> Apple
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Signin;
