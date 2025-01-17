import SectionHeader from '../SectionHeader/SectionHeader'

export default function About() {
  return (
    <div className='bg-[#1ABC9C] mt-[72px] pt-8'>
      <div className="container mx-auto text-white text-center p-32 min-h-[calc(100vh-412px)]">
        <div className='text-center'>
          <SectionHeader title="about component" />
          <div className='flex justify-center items-center flex-col md:flex-row text-start px-8 gap-x-8 mx-auto'>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
