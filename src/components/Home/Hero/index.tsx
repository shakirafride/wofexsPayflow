import { withBasePath } from '@/utils/urlHelper'
import Image from 'next/image'

const Banner = () => {
    return (
        <section className='bg-header pt-52 pb-10'>
            <div className='container px-4'>
                <div className='grid grid-cols-1 lg:grid-cols-12'>
                    <div className='col-span-7 flex flex-col justify-evenly relative'>
                        <Image
                            src={withBasePath('/images/hero/star.svg')}
                            alt='star-image'
                            width={95}
                            height={97}
                            className='absolute top-[-74px] right-[51px]'
                        />
                        <Image
                            src={withBasePath('/images/hero/lineone.svg')}
                            alt='line-image'
                            width={190}
                            height={148}
                            className='absolute top-[-74px] right-[51px]'
                        />
                        <h1 className='text-midnight_text text-4xl md:text-86 text-center lg:text-start font-semibold pt-5'>
                            Streamline your payment workflow with PayFlow.
                        </h1>
                        <h3 className='text-black opacity-75 text-lg font-normal text-center lg:text-start pt-8'>
                            Transform your business with our comprehensive payment management platform. 
                            Track invoices, manage payments, and gain valuable insights to grow your business 
                            with PayFlow&apos;s intuitive dashboard and powerful analytics.
                        </h3>
                        <div className='pt-8 mx-auto lg:mx-0'>
                            <button className='text-white text-xl font-medium py-6 px-12 rounded-full transition duration-300 border border-primary bg-primary hover:bg-transparent hover:text-primary'>
                                Get started
                            </button>
                        </div>
                    </div>
                    <div className='col-span-5 flex justify-center xl:-mb-32 xl:-mr-32 pt-10 lg:pt-0'>
                        <Image
                            src={withBasePath('/images/hero/banner.png')}
                            alt='nothing'
                            width={1000}
                            height={805}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
