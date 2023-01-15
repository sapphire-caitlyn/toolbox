export const file = `##imports##

namespace ##namespace##
{
    [Produces("application/json")]
    [Route("##name_down##")]
    public class ##name_up##Controller
    {
        private readonly IService##name_up## service;

        #region Constructor
        /// <summary>
        ///
        /// </summary>
        /// <param name="_service"></param>
        /// <param name="contextAccessor"></param>

        public ##name_up##Controller(IService##name_up## _service, IHttpContextAccessor contextAccessor)
        {
            try
            {
                service = _service;
            }
            catch (Exception e)
            {
                throw e;
            }
        }
        #endregion Constructor

        #region ##name_up##

        /// <summary>
        ///
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Authorize]
        [HttpDelete]
        [Route("delete/{id}")]
        public async Task<string> Delete(long id)
        {
            var result = service.Delete(id);
            return await Task.Run(() => result);
        }

        /// <summary>
        ///
        /// </summary>
        /// <param name="count"></param>
        /// <param name="page"></param>
        /// <param name="filter"></param>
        /// <returns></returns>
        [Authorize]
        [HttpGet]
        [Route("list")]
        public async Task<ViewListRetorno<List<View##name_up##>>> List(int count = 10, int page = 1, string filter = "")
        {
            var result = service.List(count, page, filter);
            return await Task.Run(() => result);
        }


        /// <summary>
        ///
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Authorize]
        [HttpGet]
        [Route("get/{id}")]
        public async Task<View##name_up##> Get(long id)
        {
            return await Task.Run(() => service.Get(id));
        }

        /// <summary>
        ///
        /// </summary>
        /// <param name="view">CRUD</param>
        /// <returns>CRUD</returns>
        [Authorize]
        [HttpPost]
        [Route("new")]
        public async Task<View##name_up##> New([FromBody] View##name_up## view)
        {
            return await Task.Run(() => service.New(view));
        }

        /// <summary>
        ///
        /// </summary>
        /// <param name="view"></param>
        /// <returns></returns>
        [Authorize]
        [HttpPut]
        [Route("update")]
        public async Task<View##name_up##> Update([FromBody] View##name_up## view)
        {
            return await Task.Run(() => service.Update(view));
        }

        /// <summary>
        ///
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Authorize]
        [HttpPut]
        [Route("ativar/{id}")]
        public async Task<View##name_up##> Ativar(long id)
        {
            return await Task.Run(() => service.Ativar(id));
        }

        /// <summary>
        /// <param name="idEmpresa"></param>
        /// </summary>
        /// <returns></returns>
        [Authorize]
        [HttpGet]
        [Route("listAtivo")]
        public async Task<List<View##name_up##>> ListAtivo(long idEmpresa)
        {
            var result = service.ListAtivo(idEmpresa);
            return await Task.Run(() => result);
        }
        #endregion
    }
}
`
