import JoinListElement, { JoinStatus } from "./joinlistelement";

export default function JoinList() {
    return (

        <div className="w-full max-w-sm p-4 border  rounded-lg shadow sm:p-6 bg-gray-800 border-gray-700">
            <h5 className="mb-3 text-base font-semibold md:text-xl text-white">
                Send en søknad!
            </h5>

            <p className="text-sm font-normal text-gray-400">
                Våre avdelinger trenger engasjerte studenter til å forme Start Gjøvik. 
                Her er en liste med alle avdelinger som er åpne for nye studenter! <br/> <br/>

                Klikk på linkene under for å søke! ✍ 
            </p>

            <ul className="my-4 space-y-3">
                <JoinListElement formUrl="https://forms.gle/7yxEwP1HqtarFaQi6" status={JoinStatus.OPEN} title="IT Verv"/>
                <JoinListElement formUrl="#" status={JoinStatus.COMING_SOON} title="Event Verv" />
                <JoinListElement formUrl="#" status={JoinStatus.COMING_SOON} title="PR Verv" />
                
            </ul>
            <div>
                <a href="mailto:hr@startgjovik.no" className="inline-flex items-center text-xs font-normal hover:underline text-gray-400">
                    <svg className="w-3 h-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Ønsker du å bli med, men usikker på avdeling? <br/>
                    Send en åpen søknad til HR (hr@startgjovik.no)!
                
                </a>
            </div>
        </div>

    )
}