import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import { withBasePath } from '@/utils/urlHelper'

const People = () => {
    return (
        <section className='pt-32 pb-20' id='product'>
            <div className='container'>
                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
                    <div className='col-span-6 flex justify-center'>
                        <Image
                            src={withBasePath('/payflow/testimony.png')}
                            alt='PayFlow Testimony'
                            width={600}
                            height={400}
                            className='rounded-2xl shadow-lg'
                        />
                    </div>
                    <div className='col-span-6 flex flex-col gap-7 lg:pl-24 mt-10 lg:mt-0 '>
                        <h2 className='text-midnight_text text-4xl sm:text-5xl font-semibold text-center lg:text-start leading-140!'>
                            Trusted by 100k+ businesses worldwide.
                        </h2>
                        <h3 className='text-black/75 text-lg font-normal text-center lg:text-start pt-5 lg:pt-0'>
                            Join thousands of businesses that have streamlined their payment processes 
                            and improved their cash flow with PayFlow&apos;s comprehensive payment management platform.
                        </h3>
                        <Link
                            href={'/'}
                            scroll={false}
                            className='text-primary hover:text-blue-700 text-lg font-medium flex items-center gap-2 mx-auto lg:mx-0 pt-5 lg:pt-0'>
                            Learn more
                            <Icon icon='tabler:arrow-right' className='text-2xl' />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default People