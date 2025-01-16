import SectionHeader from '../SectionHeader/SectionHeader'
import avataaars from './../../assets/avataaars.svg'

export default function Home() {
    return (
        <div className='flex flex-col items-center bg-[#1ABC9C] text-white p-4 mt-[104px]'>
            <img src={avataaars} className='w-[250px]' alt="" />
            <div className='mt-12 text-center'>
                <SectionHeader title="start framework" />
                <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    )
}
