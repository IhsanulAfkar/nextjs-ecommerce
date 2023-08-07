import { Categories } from "@components/Categories"
import { Jumbotron } from "@components/Jumbotron"
export const Header = () => {
    return (
        <section className="flex md:flex-row flex-col-reverse w-full justify-between gap-12">
            <div className="md:basis-1/4 md:border-r-2 ">
                <Categories />
            </div>
            <div className="md:basis-3/4 ">
                <Jumbotron />
            </div>
        </section>
    )
}
