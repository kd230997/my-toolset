
const MainContent = ({ className, ContentComponent }: any) => {
  return (
    <div className={`${className} px-2 py-7`}>
      <ContentComponent />
    </div>
  );
};

export default MainContent;
