import { useState } from "react";
import { Link } from "react-router-dom";

const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">로그인</h2>
                <input type="text" placeholder="아이디" className="w-full px-3 py-2 mb-3 border rounded-md" />
                <input type="password" placeholder="비밀번호" className="w-full px-3 py-2 mb-3 border rounded-md" />
                <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">로그인</button>
                <button onClick={onClose} className="w-full mt-2 bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400">닫기</button>
            </div>
        </div>
    );
};

const Header = () => {

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/">
                        <h1 className="text-xl font-bold text-gray-800 cursor-pointer">Block Market</h1>
                    </Link>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="/" className="text-gray-600 hover:text-gray-900">홈</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">판매하기</a></li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4">
                    <input type="text" placeholder="검색" className="px-3 py-2 border rounded-md" />
                    <button onClick={openLoginModal} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">로그인</button>
                </div>
            </div>
            <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
        </header>
    );
};

export default Header;