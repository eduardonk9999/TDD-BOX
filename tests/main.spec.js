describe('Main', function() {
  describe('Methodo A', function() {
    context('Case 1', function() {
      it('should happen blabla', function() {
        throw new Error('just an error')
      })
    })

    context('Case 2', function() {
      it('should happen blabla', function() {
        throw new Error('just an error')
      })

      it('should happen mimimi', function() {

      })
    })
  })

  describe('Method B', function() {

  })
})