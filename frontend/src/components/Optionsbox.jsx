import { useEffect, useState } from "react";
import { IoSettings } from "react-icons/io5";

function Optionbox() {
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setExpanded(true);
        }, 100); // Trigger after initial render

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="d-flex flex-column justify-content-start align-items-center rounded-4 p-3"
            style={{
                width: '20vw',
                minWidth: '80px',
                maxWidth: '100px',
                height: '90vh',
                marginTop: '20px',
                marginLeft: '10px',
                backgroundColor: '#1d1d1d',
            }}
        >
            <div className="d-flex flex-column mt-3 " >
                {[...Array(5)].map((_, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-circle mx-auto align-items-centre"
                        style={{
                            width: '50px',
                            height: '50px',
                            marginTop: expanded ? '1rem' : (idx === 0 ? '0' : '-50px'),
                            transition: 'margin 1.5s ease',
                            zIndex: 5 - idx,
                            color: 'black',
                        }}
                    >
                        <IoSettings style={{
                            width: '50px',
                            height: '50px'

                        }} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Optionbox;
