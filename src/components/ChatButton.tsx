'use client';

export default function ChatButton() {
  const handleChatClick = () => {
    // Add your chat functionality here
    alert('Opening chat...');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-bounce cursor-pointer group">
      <div
        onClick={handleChatClick}
        className="bg-primary hover:bg-primary/90 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-l-full rounded-tr-full shadow-lg flex items-center space-x-2 transition-all hover:scale-105"
      >
        <span className="material-icons text-sm">chat_bubble</span>
        <span>Let&apos;s Chat!</span>
      </div>
    </div>
  );
}