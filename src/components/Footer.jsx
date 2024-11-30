const Footer = () => {
    return (
        <footer className="bg-amber-100 text-amber-800 mt-auto">
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold">Block Market</h3>
                        <p className="text-sm">안전하고 신뢰할 수 있는 중고거래 플랫폼</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-amber-600">이용약관</a>
                        <a href="#" className="hover:text-amber-600">개인정보처리방침</a>
                        <a href="#" className="hover:text-amber-600">고객센터</a>
                    </div>
                </div>
                <div className="mt-4 text-center text-sm">
                    © 2024 Block Market. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;