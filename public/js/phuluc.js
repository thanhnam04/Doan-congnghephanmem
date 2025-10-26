const { useState } = React;

const DropdownMenu = ({ onFeatures, onContact, onAbout }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleFeatures = () => {
        onFeatures();
        setIsOpen(false);
    };

    const handleContact = () => {
        onContact();
        setIsOpen(false);
    };

    const handleAbout = () => {
        onAbout();
        setIsOpen(false);
    };

    return (
        <div style={{ position: 'relative' }}>
            <button className="btn btn-link" style={{ fontSize: '1.2rem', padding: '0.25rem 0.5rem' }} onClick={toggleDropdown}>
                Phụ lục 
            </button>
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    background: 'white',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    zIndex: 1000,
                    minWidth: '120px'
                }}>
                    <button className="dropdown-item" onClick={handleFeatures} style={{
                        display: 'block',
                        width: '100%',
                        padding: '0.5rem 1rem',
                        border: 'none',
                        background: 'none',
                        textAlign: 'left',
                        cursor: 'pointer'
                    }}>
                        Tính năng
                    </button>
                    <button className="dropdown-item" onClick={handleContact} style={{
                        display: 'block',
                        width: '100%',
                        padding: '0.5rem 1rem',
                        border: 'none',
                        background: 'none',
                        textAlign: 'left',
                        cursor: 'pointer'
                    }}>
                        Liên hệ
                    </button>
                    <button className="dropdown-item" onClick={handleAbout} style={{
                        display: 'block',
                        width: '100%',
                        padding: '0.5rem 1rem',
                        border: 'none',
                        background: 'none',
                        textAlign: 'left',
                        cursor: 'pointer'
                    }}>
                        Về chúng tôi
                    </button>
                </div>
            )}
        </div>
    );
};
