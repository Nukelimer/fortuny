import React from 'react';

function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="flex flex-col items-center space-y-4">
                {/* Spinner */}
                <div className="w-12 h-12 border-4 border-t-4 border-white border-opacity-75 rounded-full animate-spin"></div>
                {/* Text */}
                <p className="text-white text-lg font-semibold">Please wait</p>
            </div>
        </div>
    );
}

export default Loading;