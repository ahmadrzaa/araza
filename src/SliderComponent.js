import React, { useState } from 'react';
import Slider from 'react-slick';
import './SliderComponent.css';

const SliderComponent = () => {
    const [expandedId, setExpandedId] = useState(null);
    const [chatOpen, setChatOpen] = useState(false);
    const [chatInput, setChatInput] = useState('');
    const [messages, setMessages] = useState([
        { from: 'bot', text: '👋 Hi! I’m your AI agent. Ask me anything about Ahmad Raza.' }
    ]);

    const handleToggle = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const handleSend = () => {
        if (chatInput.trim() === '') return;
        const userMessage = { from: 'user', text: chatInput };
        const botReply = {
            from: 'bot',
            text: `You asked: "${chatInput}". I’ll answer shortly as your AI assistant.`
        };
        setMessages([...messages, userMessage, botReply]);
        setChatInput('');
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplaySpeed: 2000,
                }
            }
        ]
    };

    const slides = [
        {
            id: 1,
            image: '/images/arbg main.jpeg',
            heading: 'iGA Government Bahrain',
            subheading: 'Bahrain International eGov Forum',
            more: 'First visit to a government office in Bahrain related to ongoing project work.'
        },
        {
        id: 2,
        image: '/images/dgree.jpeg',
        heading: 'Master’s in Computer Science',
        subheading: 'MCA – Reva University, Bangalore',
        more: `I come from a small town and got into Reva after clearing the KMAT exam.\n
        Studying here was one of the best phases of my life.\n
        The campus, faculty, and environment were all amazing.\n
        I completed my MCA with a focus on AI and software development, this is where my real tech journey began.`
        },


        {
            id: 3,
            image: '/images/ar_bg3.jpeg',
            heading: 'Zain Business',
            subheading: 'Cybersecurity in OT Environment',
            more: 'Delivered expert insights on secure architecture for AI-powered OT systems.'
        },
        {
            id: 4,
            image: '/images/ar_bg5.jpeg',
            heading: 'Client Meeting',
            subheading: 'Victoria’s Secret – Bahrain',
            more: 'Handled full-stack consulting and AI personalization prototype demo.'
        },
        {
            id: 5,
            image: '/images/ar_bg1.jpeg',
            heading: 'Sunset Moment',
            subheading: 'Captured in Bahrain',
            more: 'A peaceful reminder of personal growth, gratitude, and mindfulness.'
        },
        {
            id: 6,
            image: '/images/ar_bg6.jpeg',
            heading: 'IBM Professional',
            subheading: 'Tech Journey in India',
            more: 'Worked on scalable enterprise AI tools during early engineering years.'
        },
        {
            id: 7,
            image: '/images/ar_bg7.jpeg',
            heading: 'Kingdom of Bahrain',
            subheading: 'Iconic Landmarks and Culture',
            more: 'Living and working in Bahrain as a software and AI engineer.'
        },
        {
            id: 8,
            image: '/images/ar_bg8.jpeg',
            heading: 'Bangalore, India',
            subheading: 'My Academic City',
            more: 'Where my passion for AI, software development, and tech leadership was born.'
        },
        {
            id: 9,
            image: '/images/ar_bg4.jpeg',
            heading: 'OT & IoT Summit',
            subheading: 'Zain Cybersecurity Summit',
            more: 'Presented research on securing AI-enabled edge and industrial devices.'
        },
        {
        id: 10,
        image: '/images/arbg_iot_ai.jpeg',
        heading: 'IoT & AI-Based Smart Solution',
        subheading: 'Live Demonstration – DropWise System',
        more: 'Delivered a working prototype of an AI-powered water monitoring solution using IoT sensors, real-time cloud integration, and predictive analytics to optimize water usage.'
        },
       {
        id: 11,
        image: '/images/usaibm.jpeg',
        heading: 'IBM Internship Experience',
        subheading: 'Java Developer – Software Engineering Internship',
        more: 'Completed a full-time software engineering internship at IBM, focusing on Java-based backend systems. Contributed to enterprise application modules and participated in code reviews, testing, and deployment workflows within an agile team.'
        }



    ];

    return (
        <div>
            <Slider {...settings} className="custom-slider-container">
                {slides.map(slide => (
                    <div key={slide.id} className="custom-slide">
                        <img src={slide.image} alt={`Slide ${slide.id}`} className="custom-slide-image" />
                        <div className="custom-slide-content">
                            <h1>{slide.heading}</h1>
                            <p>{slide.subheading}</p>
                            <button onClick={() => handleToggle(slide.id)}>
                                {expandedId === slide.id ? 'Hide' : 'Read More'}
                            </button>
                            {expandedId === slide.id && (
                                <div className="more-info">
                                    <p>{slide.more}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </Slider>

           {/* WhatsApp Floating Button */}
            <a
            href="https://wa.me/918102326415"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            >
            <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/whatsapp.svg"
                alt="WhatsApp"
                style={{ width: '40px', height: '40px', filter: 'invert(41%) sepia(75%) saturate(742%) hue-rotate(87deg) brightness(90%) contrast(89%)' }}
            />
            </a>

            {/* AR AI Agent Floating Icon */}
            <div className="chatbot-float" onClick={() => setChatOpen(true)}>
            <span className="chat-icon">🤖</span>
            <span className="chat-label"> AI Agent</span>
            </div>

            {/* Transparent Chatbox UI */}
            {chatOpen && (
            <div className="chatbot-box">
                <div className="chatbot-header">
                AR AI Agent
                <span className="chatbot-close" onClick={() => setChatOpen(false)}>✖</span>
                </div>
                <div className="chatbot-body">
                {messages.map((msg, i) => (
                    <div key={i} className={`chat-message ${msg.from}`}>
                    {msg.text}
                    </div>
                ))}
                </div>
                <div className="chatbot-input">
                <input
                    type="text"
                    placeholder="Type your question..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <button onClick={handleSend}>Send</button>
                </div>
            </div>
            )}

        </div>
    );
};

export default SliderComponent;
