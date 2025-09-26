import React, { useState } from 'react';

const RequestPage: React.FC = () => {
    const [request, setRequest] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(request.trim()){
            console.log('Movie Request Submitted:', request);
            setSubmitted(true);
            setRequest('');
            setTimeout(() => setSubmitted(false), 5000);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center pt-20 px-4">
            <div className="w-full max-w-2xl text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Request a Movie or TV Show</h1>
                    <p className="text-gray-300 mb-8">Can't find what you're looking for? Let us know!</p>
                    
                    {submitted ? (
                         <div className="bg-green-500/20 text-green-200 rounded-lg p-4 animate-fade-in">
                            <h3 className="font-bold text-xl">Thank You!</h3>
                            <p>Your request has been received.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col items-center">
                            <textarea
                                value={request}
                                onChange={(e) => setRequest(e.target.value)}
                                placeholder="e.g., The Matrix (1999) or the TV show 'Friends'..."
                                className="w-full h-32 bg-black/30 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition resize-none"
                            />
                            <button type="submit" className="mt-6 bg-brand-red font-semibold text-white px-8 py-3 rounded-full hover:bg-red-700 transition transform hover:scale-105">
                                Submit Request
                            </button>
                        </form>
                    )}
                </div>
            </div>
             <style>{`
                .animate-fade-in { animation: fadeIn 0.5s ease-out; }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            `}</style>
        </div>
    );
};

export default RequestPage;
