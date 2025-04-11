import { title } from "@/components/primitives";

export default function RecipePage() {
  return (
    <div>
      <h1 className={title()}>Recipe</h1>
      <article>
        <header>
          <h1 className="text-2xl">Peanut Butter and Jelly Sandwich!</h1>
          <p> What You Need:</p>
          <ul>
            <li>Peanut Butter</li>
            <li>Bread</li>
            <li>Jelly, any type</li>
          </ul>
          <p>Now, for this part, you &apos;ll also need a knife. </p>
          <p>
            First, get a plate. You don &apos;t wanna make a mess of the
            counter!
          </p>
          <img
            alt="Plate"
            height="400"
            src="https://images.unsplash.com/photo-1587334207810-4915c4e40c67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhdGV8ZW58MHx8MHx8fDA%3D"
            width="300"
          />
          <br />
          <p>Next, open your bread bag and take out two slices of bread.</p>
          <img
            alt="Bread"
            height="400"
            src="https://plus.unsplash.com/premium_photo-1695123523166-462cae2b080f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWQlMjBzbGljZXN8ZW58MHx8MHx8fDA%3D"
            width="300"
          />
          <p>Now, grab your peanut butter and jelly.</p>
          <div className="flex flex-wrap border-2 border-solid justify-center">
            <p className="p-5 m-5 border-2 border-dashed">
              Did you know? Jelly and jam aren &apos;t actually the same thing!
              Jelly is smoother than jam.
            </p>
            <p className="p-5 m-5 border-2 border-dashed">
              There are many types of bread you can use to make sandwiches. The
              most popular is white bread!
            </p>
            <p className="p-5 m-5 border-2 border-dashed">
              Peanut butter is optional, for those with nut allergies! Simply
              replace it with something more allergen-friendly, like chocolate
              butter.
            </p>
          </div>
        </header>
      </article>
    </div>
  );
}
