export const ColorConfiguration = () => {
    return (
        <>
            <h3 className=" text-black text-xl font-semibold mt-8 dark:text-white" >Colors</h3>
            <div className="p-6 rounded-md border mt-4 border-black/10 dark:border-white/20">
                <p className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50" ><span className="font-semibold text-lg dark:text-white">1. Override Colors</span> <br />
                    For any change in colors : \src\app\globals.css</p>
                <div className="py-4 px-5 rounded-md bg-black mt-8">
                    <p className="text-sm text-gray-400 flex flex-col gap-2">
                        <span>--color-primary: #C1FF72;</span>
                        <span>--color-secondary: #1F2A2E;</span>
                        <span>--color-lightgray: #F4F8FA;</span>
                        <span>--color-overlay: #000A0B99;</span>
                        <span>--color-darkblack: #273338;</span>
                        <span>--color-twilliteblack: #181f22;</span>
                        <span>--color-gray: #365564;</span>
                    </p>
                </div>
            </div>
            <div className="p-6 rounded-md border mt-4 border-black/10 dark:border-white/20">
                <p className="text-base font-medium text-midnight_text dark:text-white dark:text-opacity-50" ><span className="font-semibold text-lg dark:text-white">2. Override Theme Colors</span> <br />
                    For change , go to : \src\app\globals.css</p>
                <div className="py-4 px-5 rounded-md bg-black mt-8">
                    <p className="text-sm text-gray-400 flex flex-col gap-2">
                        <span>--color-primary: #C1FF72;</span>
                        <span>--color-secondary: #1F2A2E;</span>
                    </p>
                </div>
            </div>
        </>
    )
}