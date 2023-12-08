import { motion } from 'framer-motion';
import { Button } from '../../UI-components/Button';
import FormInput from '../../UI-components/FormInput';
import TextAreaInput from '../../UI-components/TextAreaInput';

const NewChapterForm = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ translateX: 0, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 250,
        damping: 30,
      }}
      exit={{ opacity: 0, x: '-100vw' }}
    >
      <h1 className="mt-10 border-b border-gray-400 pb-2 text-4xl font-medium text-gray-700">
        Crea un nou capítol
      </h1>
      <div className="mt-6 space-y-4 rounded-xl bg-slate-300 p-6 sm:p-8 md:space-y-6">
        <form className="" action="#">
          <div className="mb-3">
            <div>
              <label
                htmlFor="season"
                className="text-md mb-1 block font-semibold text-gray-900"
              >
                Selecciona una temporada
              </label>
              <select
                name="season"
                id="season"
                className="mb-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900"
                placeholder="email@email.com"
              >
                {/* Funció per a què agafi desde la temporada actual fins la del 17-18 */}
                <option selected className="bg-slate-200">
                  2023-2024
                </option>
                <option>2022-2023</option>
                <option className="bg-slate-200">2021-2022</option>
                <option>2020-2021</option>
                <option className="bg-slate-200">2019-2020</option>
                <option>2018-2019</option>
                <option className="bg-slate-200">2017-2018</option>
              </select>
            </div>
            <div className="border-b-2 border-slate-400 mt-4 mb-3"></div>
            <FormInput
              label="Títol article secció professional"
              name="title-pro"
              type="text"
              placeholder=""
            />

            <TextAreaInput
              label="Cos de l'article secció professional"
              name="content-pro"
              rows={4}
              maxLength={3000}
              placeholder="Contingut de l'article..."
            />

            <div className="border-b-2 border-slate-400 mt-4 mb-3"></div>
            <FormInput
              label="Títol article bases i filial"
              name="title-bases"
              type="text"
              placeholder=""
            />

            <TextAreaInput
              label="Cos de l'article secció base i filial"
              name="content-bases"
              rows={4}
              maxLength={3000}
              placeholder="Contingut de l'article..."
            />
          </div>

          <Button type="submit" title="PUBLICAR CAPÍTOL" to="/admin/chapter-list" />
        </form>
      </div>
    </motion.div>
  );
};

export default NewChapterForm;
