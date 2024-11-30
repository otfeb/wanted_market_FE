const Body = () => {
    const registeredProducts = [];

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">등록된 상품</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {registeredProducts.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4 shadow-md">
                        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                        <p className="text-gray-600 mb-2">{product.description}</p>
                        <p className="text-blue-600 font-bold">{product.price.toLocaleString()}원</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Body;